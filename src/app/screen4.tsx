import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen4() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You got lost chasing the noise and ended up back where you started!
      </Text>

      {/* This link loops back to Screen 1 (index) */}
      <Link href="/" style={styles.button}>
        Return to start
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
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: { fontSize: 20, textDecorationLine: "underline", color: "#fff" },
});
