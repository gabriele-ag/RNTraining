import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from 'react';


export default function HomeScreen() {

  const [message, setMessage] = useState("Non hai ancora premuto il pulsante");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ciao Gabriele!</Text>

      <Text style={styles.othertitle}>Cominciamo a imparare React Native</Text>

      <Pressable onPress={() => setMessage('EHI! MI HAI PREMUTO!')} style={styles.button}>
        <Text style={styles.othertitle}>Sono un bottone!</Text>
      </Pressable>

      <Text style={styles.othertitle}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff'
  },

  othertitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#ffffff'
  },

  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#444',
    color: '#ffffff'
  }
});
