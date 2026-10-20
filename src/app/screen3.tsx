import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Screen3() {
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
      source={require("../../assets/images/screen3.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>
          The villagers of Oakhaven peer at you through splintered window
          shutters, their faces gaunt and etched with fear. At the center of the
          muddy square, a blind elder sits by a dying fire. Without you uttering
          a word, she raises a trembling, bone-thin finger toward the jagged
          peaks of Mount Sorrow in the distance. "The shadow that curses this
          land roosts in the high caves," she rasps, pressing a cold amulet into
          your palm. The mountain awaits.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/screen5")}
        >
          <Text style={styles.buttonText}>
            Begin the ascent to Mount Sorrow
          </Text>
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
