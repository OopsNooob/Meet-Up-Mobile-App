import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useAppStore } from '../store/useAppStore';
import '../locales/i18n'; // Khởi tạo i18n
import { View, Text } from 'react-native';
import { useFCM, handleInitialNotification } from '../hooks/useFCM';

export default function RootLayout() {
  const { user, isHydrated } = useAuthStore();
  const { theme } = useAppStore();

  // FE-13: Khởi tạo FCM listener toàn app
  useFCM();

  useEffect(() => {
    // Fake hydration cho store nếu dùng persist
    useAuthStore.setState({ isHydrated: true });

    // FE-13: Xử lý notification khi app mở từ killed state
    handleInitialNotification();
  }, []);

  if (!isHydrated) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(fe2)" options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
