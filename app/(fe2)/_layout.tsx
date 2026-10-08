import { Stack } from 'expo-router';

export default function Fe2Layout() {
  return (
    <Stack>
      <Stack.Screen name="map" options={{ title: 'Bản đồ bạn bè' }} />
      <Stack.Screen name="location-settings" options={{ title: 'Cài đặt vị trí' }} />
      <Stack.Screen name="recommendation" options={{ title: 'Gợi ý địa điểm' }} />
      <Stack.Screen name="place-detail" options={{ title: 'Chi tiết địa điểm' }} />
      <Stack.Screen name="chat" options={{ title: 'Chat nhóm' }} />
      <Stack.Screen name="ai-explanation" options={{ title: 'AI Giải thích', presentation: 'modal' }} />
      <Stack.Screen name="nearby" options={{ title: 'Bạn bè ở gần' }} />
    </Stack>
  );
}
