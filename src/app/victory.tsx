import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function VictoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Victory! You have completed the journey.</Text>

      <Link href="/" style={styles.button}>
        Play Again
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "#fff", fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { fontSize: 20, textDecorationLine: "underline", color: "#fff" },
});
