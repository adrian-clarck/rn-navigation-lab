import { useEffect, useState } from "react";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const jogos = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
    sinopse:
      "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
  },
  {
    id: "2",
    titulo: "Red Dead Redemption 2",
    genero: "Acao / Mundo Aberto",
    plataforma: "PS4 / Xbox / PC",
    nota: "10/10",
    sinopse:
      "Uma epica historia sobre a vida fora da lei no coracao da America.",
  },
  {
    id: "3",
    titulo: "Outer Wilds",
    genero: "Aventura / Indie",
    plataforma: "PS / PC / Xbox / Switch",
    nota: "9/10",
    sinopse:
      "Um explorador espacial revive os mesmos 22 minutos enquanto desvenda os misterios de um antigo sistema solar preso a beira do fim.",
  },
  {
    id: "4",
    titulo: "Hollow Knight",
    genero: "Metroidvania / Plataforma",
    plataforma: "PC / Switch / PS4",
    nota: "9/10",
    sinopse: "Explore um vasto reino subterraneo habitado por insetos.",
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState("");

  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase()),
    );

    setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detalhe", { ...item })}
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>

          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Nebula Games</Text>

        <Text style={styles.headerSubtitulo}>Explore mundos inesqueciveis</Text>
      </View>

      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#8F8AA3"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
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

  headerSubtitulo: {
    fontSize: 13,
    color: "#B8B5C3",
    marginTop: 4,
  },

  buscaContainer: {
    backgroundColor: "#18141F",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  buscaInput: {
    backgroundColor: "#2A2436",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#F5F3FF",
  },

  lista: {
    padding: 16,
    gap: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#1E1B26",

    borderRadius: 14,
    padding: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 3,
  },

  cardIcone: {
    width: 52,
    height: 52,
    borderRadius: 26,

    backgroundColor: "#8B5CF6",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 14,
  },

  cardIconeTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F5F3FF",
    marginBottom: 4,
  },

  cardSubtitulo: {
    fontSize: 13,
    color: "#B8B5C3",
  },
});
