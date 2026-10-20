import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fantasy Game Title</Text>

      <Link href="/screen2" style={styles.button}>
        Enter the dark forest (Go to Screen 2)
      </Link>

      <Link href="/screen3" style={styles.button}>
        Visit the village (Go to Screen 3)
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
  text: { color: "#fff", fontSize: 24, marginBottom: 20 },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
    marginVertical: 10,
  },
});
