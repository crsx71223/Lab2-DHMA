import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Screen5() {
  const [playerRoll, setPlayerRoll] = useState<number | null>(null);
  const [enemyRoll, setEnemyRoll] = useState<number | null>(null);
  const [battleOutcome, setBattleOutcome] = useState<
    "pending" | "win" | "lose"
  >("pending");

  const handleBattle = () => {
    const pRoll = Math.floor(Math.random() * 6) + 1;
    const eRoll = Math.floor(Math.random() * 6) + 1;

    setPlayerRoll(pRoll);
    setEnemyRoll(eRoll);

    if (pRoll > eRoll) {
      setBattleOutcome("win");
    } else {
      setBattleOutcome("lose");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>A ferocious monster blocks your path!</Text>

      {battleOutcome === "pending" && (
        <View style={styles.buttonContainer}>
          <Button
            title="Roll Dice to Attack!"
            color="#ff4444"
            onPress={handleBattle}
          />
        </View>
      )}

      {playerRoll !== null && enemyRoll !== null && (
        <Text style={styles.rollText}>
          You rolled: {playerRoll} {"\n"}
          Monster rolled: {enemyRoll}
        </Text>
      )}

      {battleOutcome === "win" && (
        <>
          <Text style={styles.resultText}>You defeated the monster!</Text>
          <Link href="/victory" style={styles.linkButton}>
            Step into the light (Go to Victory)
          </Link>
        </>
      )}

      {battleOutcome === "lose" && (
        <>
          <Text style={styles.resultText}>You were struck down. You died.</Text>
          <Link href="/" style={styles.linkButton}>
            Restart Game
          </Link>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: { color: "#fff", fontSize: 20, marginBottom: 20, textAlign: "center" },
  rollText: {
    color: "#aaa",
    fontSize: 18,
    marginVertical: 20,
    textAlign: "center",
  },
  resultText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  buttonContainer: { marginVertical: 10, width: 200 },
  linkButton: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#4CAF50",
    marginTop: 20,
  },
});
