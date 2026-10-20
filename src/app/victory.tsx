import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VictoryScreen() {
  const router = useRouter();

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

  return (
    <ImageBackground
      source={require("../../assets/images/Background-Image.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Victory</Text>
        <Text style={styles.text}>
          With the beast slain and the cursed lands finally quiet, you step into
          the ancient ruins beyond the plateau. Resting upon a stone pedestal,
          bathed in a single ray of sunlight, is the Sunken Crown. As you lift
          the artifact, the suffocating shadows across the valley instantly
          dissipate, replaced by the warm, golden light of dawn. You have
          survived the trial and cemented your name in legend.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/")}
        >
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 100, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 45,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "BitcountInk",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 40,
    textAlign: "center",
    fontFamily: "BitcountInk",
    lineHeight: 26,
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
