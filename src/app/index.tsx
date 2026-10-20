import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);

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

  return (
    <ImageBackground
      source={require("../../assets/images/Background-Image.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require("../../assets/images/icon.jpg")}
          style={styles.logo}
        />

        <Text style={styles.title}>Fantasy Quest</Text>

        <Text style={[styles.text, { marginBottom: 30 }]}>
          The air in the Valley of Whispers grows thick with ancient magic as
          you stand at the crossroads of your destiny. To your left, the jagged
          canopy of the Blackwood Forest looms, casting unnatural, twisting
          shadows across the dirt. To your right, the faint, warm glow of hearth
          fires beckons from the isolated hamlet of Oakhaven. The artifact you
          seek—the Sunken Crown—is said to be hidden deep within these perilous
          lands. Your journey begins now.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/screen2")}
        >
          <Text style={styles.buttonText}>Enter the Blackwood Forest</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/screen3")}
        >
          <Text style={styles.buttonText}>Visit the hamlet of Oakhaven</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#ff4444" }]}
          onPress={() => BackHandler.exitApp()}
        >
          <Text style={styles.buttonText}>Exit Application</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: { width: 120, height: 120, borderRadius: 20, marginBottom: 20 },
  title: {
    color: "#fff",
    fontSize: 45,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "BitcountInk",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "BitcountInk",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "BitcountInk",
  },
});
