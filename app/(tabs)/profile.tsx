import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../../store/useAppStore';
import { useAuthStore } from '../../store/useAuthStore';

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

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Text className="text-black dark:text-white text-xl font-bold mb-8">
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

      <TouchableOpacity onPress={logout} className="bg-red-500 px-6 py-3 rounded-full w-full items-center">
        <Text className="text-white font-semibold">Đăng xuất / Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
