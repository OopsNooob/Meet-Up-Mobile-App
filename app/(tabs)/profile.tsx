import { View, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../../store/useAppStore';
import { useAuthStore } from '../../store/useAuthStore';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme, language, setLanguage } = useAppStore();
  const logout = useAuthStore((state) => state.logout);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLang = language === 'vi' ? 'en' : 'vi';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const DEV_LINKS = [
    { title: 'Test: Location Settings (FE-04)', path: '/(fe2)/location-settings' },
    { title: 'Test: Map (FE-05)', path: '/(fe2)/map' },
    { title: 'Test: Recommendation (FE-10)', path: '/(fe2)/recommendation' },
    { title: 'Test: Place Detail (FE-11)', path: '/(fe2)/place-detail', params: { placeId: 'p1' } },
    { title: 'Test: Notifications (FE-13)', path: '/(fe2)/notifications' },
    { title: 'Test: Group Chat (FE-15)', path: '/(fe2)/chat' },
    { title: 'Test: AI Explanation (FE-16)', path: '/(fe2)/ai-explanation', params: { placeId: 'p1', placeName: 'Test Place' } },
    { title: 'Test: Nearby Friends (FE-17)', path: '/(fe2)/nearby' },
    { title: 'Test: Performance & Demo (FE-20)', path: '/(fe2)/performance' },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <View className="items-center justify-center p-4">
        <Text className="text-black dark:text-white text-xl font-bold mb-8 mt-4">
          {t('tabs.profile')}
        </Text>

        <View className="flex-row items-center justify-between w-full mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg">
          <Text className="text-black dark:text-white">Dark Mode</Text>
          <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
        </View>

        <View className="flex-row items-center justify-between w-full mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg">
          <Text className="text-black dark:text-white">Language ({language.toUpperCase()})</Text>
          <TouchableOpacity onPress={toggleLanguage} className="bg-blue-500 px-4 py-2 rounded">
            <Text className="text-white">Change</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={logout} className="bg-red-500 px-6 py-3 rounded-full w-full items-center mb-8">
          <Text className="text-white font-semibold">Đăng xuất / Logout</Text>
        </TouchableOpacity>

        {/* DEV MENU FE2 */}
        <View className="w-full bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg mb-8 border border-orange-300 dark:border-orange-800">
          <Text className="font-bold text-orange-800 dark:text-orange-200 mb-4 text-center">🔧 Dev Menu (FE2 Test)</Text>
          {DEV_LINKS.map((link, i) => (
            <TouchableOpacity 
              key={i} 
              onPress={() => router.push({ pathname: link.path as any, params: link.params })}
              className="bg-white dark:bg-gray-800 py-3 px-4 rounded mb-2 border border-gray-200 dark:border-gray-700"
            >
              <Text className="text-blue-600 dark:text-blue-400 font-medium">{link.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
