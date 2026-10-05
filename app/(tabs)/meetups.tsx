import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function MeetupsScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Text className="text-black dark:text-white mb-4">
        {t('meetup.list_empty')}
      </Text>
      <TouchableOpacity className="bg-green-500 px-6 py-3 rounded-full">
        <Text className="text-white font-semibold">{t('meetup.create')}</Text>
      </TouchableOpacity>
    </View>
  );
}
