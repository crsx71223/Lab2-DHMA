import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    BitcountInk: require("../../assets/fonts/BitcountInk-VariableFont.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

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
