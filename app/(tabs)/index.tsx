import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function MapScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Text className="text-black dark:text-white text-lg">
        {t('tabs.map')} - Tích hợp React Native Maps tại đây
      </Text>
    </View>
  );
}
