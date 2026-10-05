import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useAppStore } from '../store/useAppStore';
import '../locales/i18n'; // Khởi tạo i18n
import { View, Text } from 'react-native';

export default function RootLayout() {
  const { user, isHydrated } = useAuthStore();
  const { theme } = useAppStore();

  // Fake hydration cho store nếu dùng persist
  useEffect(() => {
    useAuthStore.setState({ isHydrated: true });
  }, []);

  if (!isHydrated) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-black">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
