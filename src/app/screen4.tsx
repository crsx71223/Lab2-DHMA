import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Screen4() {
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
        <Text style={styles.text}>
          You draw your weapon and plunge into the thorny thicket, chasing the
          maddening clicking sound. The mist instantly thickens into an
          impenetrable grey wall, disorienting your senses and twisting the
          woods into a labyrinth of dead ends. Hours bleed away as you stumble
          blindly through the briars, only to burst through a treeline and
          collapse on a familiar dirt road. The clicking fades into a mocking
          silence. You have wandered in a massive circle and returned exactly
          where you started.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/")}
        >
          <Text style={styles.buttonText}>Stumble back to the crossroads</Text>
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
