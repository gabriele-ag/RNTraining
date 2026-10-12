import {
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import GameItem from '../components/GameItem';
import GameForm from "../components/GameForm";

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

  const handleSubmit = () => {
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
    setCategory('Nessuna categoria');
    }
  
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ciao Gabriele!</Text>

      <Text style={styles.othertitle}>Cominciamo a imparare React Native</Text>

      <GameForm
        title={text}
        category={category}
        editing={editingId !== null}
        onTitleChange={setText}
        onCategoryChange={setCategory}
        onSubmit={handleSubmit}
      />

      {/* {items.map((item, index) => (
        <Text key={index} style={styles.othertitle}>
          {item}
        </Text>
      ))} */}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GameItem
            title={item.title}
            category={item.category}
            onEdit={() => editItem(item)}
            onDelete={() => deleteItem(item.id)}
          />
        )}
      />

      <Text style={styles.othertitle}>{message}</Text>

      {/* <Text style={styles.othertitle}>Hai scritto: {text}</Text> */}
    </SafeAreaView>
  )
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
    backgroundColor: "#ffffff",
    width: 300,
    fontSize: 16,
    fontWeight: "bold",
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

});
