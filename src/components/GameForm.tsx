import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type GameFormProps = {
  title: string;
  category: string;
  editing: boolean;
  onTitleChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSubmit: () => void;
};

export default function GameForm({
  title,
  category,
  editing,
  onTitleChange,
  onCategoryChange,
  onSubmit,
}: GameFormProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Titolo..."
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={onTitleChange}
      ></TextInput>

      <Text style={styles.label}>Categoria: {category}</Text>

      <View style={styles.categories}>
        {["Videogioco", "Film", "Libro"].map((curOption) => (
          <Pressable
            key={curOption}
            style={[
              styles.categoryButton,
              category === curOption && styles.selectedCategory,
            ]}
            onPress={() => onCategoryChange(curOption)}
          >
            <Text style={styles.buttonText}>{curOption}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.buttonText}>
          {editing ? "Salva modifica" : "Aggiungi"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 20,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#fff",
  },

  label: {
    color: "#fff",
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#444",
  },

  selectedCategory: {
    backgroundColor: "#176B45",
  },

  submitButton: {
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#176B45",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
