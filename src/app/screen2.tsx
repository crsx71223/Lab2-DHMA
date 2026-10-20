import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my screen with the personal data</Text>
      <Link href="/" style={styles.button}>
        Return to the first screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
  });
