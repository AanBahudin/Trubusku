import { Stack } from "expo-router"

export default function _layout () {
  return (
    <Stack
        screenOptions={{
            headerShown: false,
            animation: "fade",
            gestureEnabled: true
        }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
    </Stack>
  )
}