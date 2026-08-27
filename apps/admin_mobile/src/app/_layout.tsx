import { useAppFonts } from '@/lib/fonts';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {

  const [fontsLoaded] = useAppFonts()
  if (!fontsLoaded) {
    return <View />
  }

  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(auth)" />
      {/* <Stack.Screen name="(app)" /> */}
    </Stack>
  );
}
