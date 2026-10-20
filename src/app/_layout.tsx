import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Screen 1" }} />
      <Stack.Screen name="screen2" options={{ title: "Screen 2" }} />
      <Stack.Screen name="screen3" options={{ title: "Screen 3" }} />
      <Stack.Screen name="screen4" options={{ title: "Screen 4" }} />
      <Stack.Screen name="screen5" options={{ title: "Screen 5" }} />
      <Stack.Screen name="victory" options={{ title: "Victory" }} />
    </Stack>
  );
}
