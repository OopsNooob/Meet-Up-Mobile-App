import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../store/useAuthStore';

export default function LoginScreen() {
  const { t } = useTranslation();
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    // Fake login
    login({ id: '1', email: 'test@gmail.com', name: 'Tester', shareLocation: true }, 'fake-jwt-token');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-bold text-black dark:text-white mb-6">MeetUp App</Text>
      <TouchableOpacity 
        className="bg-blue-500 px-6 py-3 rounded-full"
        onPress={handleLogin}
      >
        <Text className="text-white font-semibold">{t('auth.login_google')}</Text>
      </TouchableOpacity>
    </View>
  );
}
