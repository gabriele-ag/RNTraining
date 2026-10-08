import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function HomeScreen() {
  const [message, setMessage] = useState("Non hai ancora premuto il pulsante");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Nessuna categoria");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [items, setItems] = useState<
    {
      id: number;
      title: string;
      category: string;
    }[]
  >([]);

  const deleteItem = (id: number) => {
    setItems(curItem => curItem.filter(item => item.id !== id));
  };

  const editItem = (item: {id: number; title: string; category: string;}) => {
      setText(item.title);
      setCategory(item.category);
      setEditingId(item.id);
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ciao Gabriele!</Text>

      <Text style={styles.othertitle}>Cominciamo a imparare React Native</Text>

      <TextInput
        style={styles.input}
        placeholder="Scrivi qualcosa..."
        value={text}
        onChangeText={setText}
      ></TextInput>

      <Pressable
        style={styles.categoryButton}
        onPress={() => setCategory('Videogioco')}
      >
        <Text style={styles.buttonText}>Videogioco</Text>
      </Pressable>

      <Pressable
        style={styles.categoryButton}
        onPress={() => setCategory('Film')}
      >
        <Text style={styles.buttonText}>Film</Text>
      </Pressable>

      <Pressable
        style={styles.categoryButton}
        onPress={() => setCategory('Libro')}
      >
        <Text style={styles.buttonText}>Libro</Text>
      </Pressable>


      <Pressable
       onPress={() => {
        if (!text.trim()) return;

        if (editingId !== null) {
          setItems(prev =>
            prev.map(item =>
              item.id === editingId
                ? {
                    ...item,
                    title: text.trim(),
                    category,
                  }
                : item
            )
          );

          setEditingId(null);
        } else {
          setItems(prev => [
            ...prev,
            {
              id: Date.now(),
              title: text.trim(),
              category,
            },
          ]);
        }

        setText('');
      }}>   
        <Text style={styles.button}>{editingId !== null ? 'Salva modifica' : 'Aggiungi'}</Text>
      </Pressable>

      {/* {items.map((item, index) => (
        <Text key={index} style={styles.othertitle}>
          {item}
        </Text>
      ))} */}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.othertitle}>{item.title}</Text>

            <Text style={styles.othertitle}>Categoria: {item.category}</Text>

            <Pressable
              style={styles.deleteButton}
              onPress={() => deleteItem(item.id)}
            ><Text style={styles.othertitle}>Elimina</Text></Pressable>

            <Pressable
              style={styles.editButton}
              onPress={() => editItem(item)}
            ><Text style={styles.othertitle}>Modifica</Text></Pressable>
          </View>
        )}
      />

      <Text style={styles.othertitle}>{message}</Text>

      {/* <Text style={styles.othertitle}>Hai scritto: {text}</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#186d94",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },

  othertitle: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#ffffff",
  },

  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#444",
    width: 300,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#ffffff",
  },

  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#444',
  },

  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'rgb(211, 37, 14)',
  },

  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'rgb(211, 149, 14)',
  },


});
