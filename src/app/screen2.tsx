import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You are in a dark forest. A path splits in two.
      </Text>

      <Link href="/screen4" style={styles.button}>
        Follow the strange noise (Go to Screen 4)
      </Link>

      <Link href="/screen5" style={styles.button}>
        Walk towards the light (Go to Screen 5)
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "#fff", fontSize: 18, marginBottom: 20, textAlign: "center" },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
    marginVertical: 10,
  },
});
