import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs screenOptions={{ headerShown: true, tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: t('tabs.map'),
        }} 
      />
      <Tabs.Screen 
        name="meetups" 
        options={{ 
          title: t('tabs.meetups'),
        }} 
      />
      <Tabs.Screen 
        name="friends" 
        options={{ 
          title: t('tabs.friends'),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: t('tabs.profile'),
        }} 
      />
    </Tabs>
  );
}
