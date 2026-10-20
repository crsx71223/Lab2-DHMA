import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Screen2() {
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
      source={require("../../assets/images/screen2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>
          You step into the suffocating gloom of the Blackwood, where the
          ancient trees seem to bleed a heavy, sweet-smelling mist. The dense
          undergrowth chokes the trail, forcing you to a halt where the path
          violently fractures in two. Down the left hollow, a rhythmic,
          unnatural clicking sound echoes through the dead branches, gnawing at
          your sanity. Down the right, a soft, pulsating azure light bleeds
          through the foliage, untouched by the surrounding rot.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/screen4")}
        >
          <Text style={styles.buttonText}>Investigate the clicking sound</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("/screen5")}
        >
          <Text style={styles.buttonText}>Follow the azure light</Text>
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
