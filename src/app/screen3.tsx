import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The village elder points you toward a distant mountain.
      </Text>

      <Link href="/screen5" style={styles.button}>
        Travel to the mountain (Go to Screen 5)
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
