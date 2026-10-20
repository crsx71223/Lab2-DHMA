import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Screen5() {
  const router = useRouter();
  const [playerRoll, setPlayerRoll] = useState<number | null>(null);
  const [enemyRoll, setEnemyRoll] = useState<number | null>(null);
  const [battleOutcome, setBattleOutcome] = useState<
    "pending" | "win" | "lose"
  >("pending");

  async function playSound() {
    try {
      const { sound: clickSound } = await Audio.Sound.createAsync(
        require("../../assets/audio/Click-Sound.mp3"),
      );
      await clickSound.playAsync();
    } catch (error) {
      console.log("Click sound failed to load:", error);
    }
  }

  async function handleBattle() {
    await playSound();
    const pRoll = Math.floor(Math.random() * 6) + 1;
    const eRoll = Math.floor(Math.random() * 6) + 1;

    setPlayerRoll(pRoll);
    setEnemyRoll(eRoll);

    if (pRoll > eRoll) {
      setBattleOutcome("win");
    } else {
      setBattleOutcome("lose");
    }
  }

  async function handleButtonPress(route: any) {
    await playSound();
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
        {battleOutcome === "pending" && (
          <>
            <Text style={styles.text}>
              The treacherous ascent brings you to a plateau littered with
              shattered bone and scorched earth. Suddenly, the ground violently
              trembles as a colossal, obsidian-scaled drake drops from the storm
              clouds above. Its eyes burn with a furious, ancient hatred, and a
              deafening roar shatters the mountain air as it lowers its horned
              head to strike. There is no running from this beast; you must
              stand your ground.
            </Text>
            <TouchableOpacity
              style={styles.battleButton}
              onPress={handleBattle}
            >
              <Text style={styles.buttonText}>Roll Dice to Attack!</Text>
            </TouchableOpacity>
          </>
        )}

        {playerRoll !== null && enemyRoll !== null && (
          <Text style={styles.rollText}>
            You rolled: {playerRoll} {"\n"}
            Drake rolled: {enemyRoll}
          </Text>
        )}

        {battleOutcome === "win" && (
          <>
            <Text style={styles.resultText}>
              Your final strike lands true, piercing the beast's armor and
              striking its corrupted heart. The monster collapses into a
              mountain of ash, clearing the path forward.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress("/victory")}
            >
              <Text style={styles.buttonText}>Step into the ancient ruins</Text>
            </TouchableOpacity>
          </>
        )}

        {battleOutcome === "lose" && (
          <>
            <Text style={styles.resultText}>
              Your weapon shatters against the beast's impenetrable scales. A
              blinding flash of fire consumes your vision as the monster claims
              its final victory. You have perished.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress("/")}
            >
              <Text style={styles.buttonText}>Restart Journey</Text>
            </TouchableOpacity>
          </>
        )}
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
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "BitcountInk",
    lineHeight: 26,
  },
  rollText: {
    color: "#aaa",
    fontSize: 22,
    marginVertical: 20,
    textAlign: "center",
    fontFamily: "BitcountInk",
  },
  resultText: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    fontFamily: "BitcountInk",
    lineHeight: 28,
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  battleButton: {
    backgroundColor: "#ff4444",
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
