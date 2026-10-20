import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen5() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A monster blocks your path to victory!</Text>

      {/* Will add the dice roll combat here */}

      <Link href="/victory" style={styles.button}>
        Flee to victory (Go to Victory)
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
