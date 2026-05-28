import { StyleSheet, Text, View } from "react-native";

export default function CardJogo({ titulo, genero, plataforma, nota }) {
  return (
    <View style={styles.card}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>{titulo}</Text>

        <View style={styles.notaContainer}>
          <Text style={styles.nota}>{nota}</Text>
        </View>
      </View>

      <Text style={styles.genero}>{genero}</Text>

      <Text style={styles.plataforma}>{plataforma}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1B26",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 14,
    padding: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 3,
  },

  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  titulo: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "#F5F3FF",
    marginRight: 12,
  },

  notaContainer: {
    backgroundColor: "#8B5CF6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  nota: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  },

  genero: {
    fontSize: 14,
    color: "#B8B5C3",
    marginBottom: 6,
  },

  plataforma: {
    fontSize: 13,
    color: "#8F8AA3",
  },
});
