import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Perfil</Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>A</Text>
        </View>

        <Text style={styles.nome}>Adrian</Text>

        <Text style={styles.email}>adrian.clarck209@gmail.com</Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Jogos salvos</Text>

          <Text style={styles.infoValor}>12</Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Favorito atual</Text>

          <Text style={styles.infoValor}>Outer Wilds</Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Membro desde</Text>

          <Text style={styles.infoValor}>Maio 2026</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Gerenciar biblioteca</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121018",
  },

  header: {
    backgroundColor: "#18141F",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },

  headerTitulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F5F3FF",
  },

  cartao: {
    margin: 16,

    backgroundColor: "#1E1B26",

    borderRadius: 18,
    padding: 24,

    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 4,
  },

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,

    backgroundColor: "#8B5CF6",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 3,
    borderColor: "#A78BFA",

    marginBottom: 16,
  },

  avatarTexto: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F5F3FF",
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: "#B8B5C3",
    marginBottom: 22,
  },

  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#2A2436",
    marginBottom: 16,
  },

  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },

  infoLabel: {
    fontSize: 14,
    color: "#B8B5C3",
  },

  infoValor: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F5F3FF",
  },

  botao: {
    marginHorizontal: 16,

    backgroundColor: "#8B5CF6",

    borderRadius: 14,
    paddingVertical: 15,

    alignItems: "center",
  },

  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
