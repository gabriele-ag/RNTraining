import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';


export default function HomeScreen() {

  const [message, setMessage] = useState("Non hai ancora premuto il pulsante");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ciao Gabriele!</Text>

      <Text style={styles.othertitle}>Cominciamo a imparare React Native</Text>

      <Pressable onPress={() => setMessage('EHI! MI HAI PREMUTO!')} style={styles.button}>
        <Text style={styles.buttonText}>Premi qui</Text>
      </Pressable>

      <Text style={styles.othertitle}>{message}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
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
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  backgroundColor: '#444',
  width: 300,
},

  buttonText: {
  color: '#ffffff',
  fontSize: 16,
  fontWeight: 'bold',
},
});
