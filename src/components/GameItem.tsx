import { Pressable, StyleSheet, Text, View } from 'react-native';

type GameItemProps = {
    title: string;
    category: string;
    onEdit: () => void;
    onDelete: () => void;
}

export default function GameItem({title, category, onEdit, onDelete}: GameItemProps) {
    return (
        <View style={styles.item}>
        <View>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.category}>
          Categoria: {category}
        </Text>
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.editButton}
          onPress={onEdit}
        >
          <Text style={styles.buttonText}>Modifica</Text>
        </Pressable>

        <Pressable
          style={styles.deleteButton}
          onPress={onDelete}
        >
          <Text style={styles.buttonText}>Elimina</Text>
        </Pressable>
      </View>
    </View>

    )
   
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  category: {
    color: '#fff',
    marginTop: 4,
  },

  actions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },

  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#444',
  },

  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#822',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});