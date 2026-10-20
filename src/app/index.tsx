import { Audio } from "expo-av";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const [fontsLoaded] = useFonts({
    BitcountInk: require("../../assets/fonts/BitcountInk-VariableFont.ttf"),
  });

  async function playBackgroundMusic() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/audio/Background-Music.mp3"),
        { isLooping: true, shouldPlay: true },
      );
      setSound(sound);
    } catch (error) {
      console.log(
        "Background audio blocked by browser or failed to load:",
        error,
      );
    }
  }

  async function handleButtonPress(route: any) {
    try {
      const { sound: clickSound } = await Audio.Sound.createAsync(
        require("../../assets/audio/Click-Sound.mp3"),
      );
      await clickSound.playAsync();
    } catch (error) {
      console.log("Click sound failed to load:", error);
    }

    setTimeout(() => {
      router.push(route);
    }, 300);
  }

  useEffect(() => {
    playBackgroundMusic();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground
      source={require("../../assets/images/Background-Image.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={[styles.title, { fontFamily: "BitcountInk" }]}>
          Fantasy Quest
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/screen2")}
        >
          <Text style={styles.buttonText}>
            Enter the dark forest (Go to Screen 2)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/screen3")}
        >
          <Text style={styles.buttonText}>
            Visit the village (Go to Screen 3)
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "#fff", fontSize: 45, marginBottom: 40, textAlign: "center" },
  button: {
    backgroundColor: "#333",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: "80%",
  },
  buttonText: { color: "#fff", fontSize: 18, textAlign: "center" },
});
