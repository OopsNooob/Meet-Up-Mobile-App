/**
 * FriendMarker — Marker bạn bè trên bản đồ (FE-05)
 * Dark mode: màu bubble theo theme (fresh/stale không đổi vì là overlay trên map)
 * i18n: nhãn stale và thời gian
 */
import { View, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import { useTranslation } from 'react-i18next';

export type Friend = {
  userId: string;
  name: string;
  lat: number;
  lng: number;
  accuracy: number;
  updatedAt: Date;
  isStale: boolean;
};

type Props = {
  friend: Friend;
  onPress?: (friend: Friend) => void;
};

// Màu marker giữ cứng vì overlay trên bản đồ cần contrast cao bất kể theme app
const FRESH_COLOR = '#3b82f6';
const STALE_COLOR = '#f97316';

export function FriendMarker({ friend, onPress }: Props) {
  const { t } = useTranslation();

  function formatUpdatedAt(date: Date): string {
    const diffMs = Date.now() - date.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return t('fe2.map.just_updated');
    if (diffMin < 60) return t('fe2.map.minutes_ago', { count: diffMin });
    return t('fe2.map.hours_ago', { count: Math.floor(diffMin / 60) });
  }

  const bubbleColor = friend.isStale ? STALE_COLOR : FRESH_COLOR;

  return (
    <Marker
      coordinate={{ latitude: friend.lat, longitude: friend.lng }}
      onPress={() => onPress?.(friend)}
    >
      <View style={styles.container}>
        <View style={[styles.bubble, { backgroundColor: bubbleColor }]}>
          <Text style={styles.name} numberOfLines={1}>{friend.name}</Text>
          <Text style={styles.time}>{formatUpdatedAt(friend.updatedAt)}</Text>
          {friend.isStale && (
            <Text style={styles.staleLabel}>{t('fe2.common.stale_label')}</Text>
          )}
          {friend.accuracy > 100 && !friend.isStale && (
            <Text style={styles.accuracyWarn}>~{Math.round(friend.accuracy)}m</Text>
          )}
        </View>
        <View style={[styles.pin, { borderTopColor: bubbleColor }]} />
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  bubble: { borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6, maxWidth: 130, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 4 },
  name: { color: '#fff', fontWeight: '700', fontSize: 12 },
  time: { color: 'rgba(255,255,255,0.85)', fontSize: 10, marginTop: 2 },
  staleLabel: { color: '#fff', fontSize: 10, fontWeight: '600', marginTop: 2 },
  accuracyWarn: { color: '#fde68a', fontSize: 10, marginTop: 2 },
  pin: { width: 0, height: 0, borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 8, borderLeftColor: 'transparent', borderRightColor: 'transparent' },
});
