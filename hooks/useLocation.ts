/**
 * FE-04 + FE-06 — Hook quản lý GPS permission và phát vị trí qua Socket
 * Mock: trả về vị trí giả nếu chưa có expo-location setup
 */
import { useState, useEffect, useRef } from 'react';
import { useSocket } from './useSocket';

export type LocationState = {
  lat: number;
  lng: number;
  accuracy: number;
  updatedAt: Date;
  isStale: boolean; // true nếu > 5 phút
};

type PermissionStatus = 'granted' | 'denied' | 'blocked' | 'undetermined';

const STALE_TTL_MS = 5 * 60 * 1000; // 5 phút

// Mock vị trí Hồ Chí Minh để test UI
const MOCK_LOCATION = { lat: 10.7769, lng: 106.7009, accuracy: 15 };

export function useLocation() {
  const [permission, setPermission] = useState<PermissionStatus>('undetermined');
  const [location, setLocation] = useState<LocationState | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const { emit } = useSocket();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Kiểm tra stale mỗi 30s
  useEffect(() => {
    const staleCheck = setInterval(() => {
      setLocation((prev) => {
        if (!prev) return prev;
        const isStale = Date.now() - prev.updatedAt.getTime() > STALE_TTL_MS;
        return { ...prev, isStale };
      });
    }, 30_000);
    return () => clearInterval(staleCheck);
  }, []);

  const requestPermission = async () => {
    // TODO: Thay bằng Location.requestForegroundPermissionsAsync() khi tích hợp
    setPermission('granted');
  };

  const startSharing = () => {
    if (permission !== 'granted') return;
    setIsSharing(true);

    // Mock: gửi location mỗi 30s
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const loc: LocationState = { ...MOCK_LOCATION, updatedAt: now, isStale: false };
      setLocation(loc);
      emit('location:update', {
        lat: loc.lat,
        lng: loc.lng,
        accuracy: loc.accuracy,
        timestamp: now.toISOString(),
      });
    }, 30_000);

    // Lần đầu ngay lập tức
    const now = new Date();
    const loc: LocationState = { ...MOCK_LOCATION, updatedAt: now, isStale: false };
    setLocation(loc);
    emit('location:update', { lat: loc.lat, lng: loc.lng, accuracy: loc.accuracy, timestamp: now.toISOString() });
  };

  const stopSharing = () => {
    setIsSharing(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return { permission, location, isSharing, requestPermission, startSharing, stopSharing };
}
