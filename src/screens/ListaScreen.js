import { useEffect, useState } from "react";

import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import CardJogo from "../components/CardJogo";

const jogosMock = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
  },

  {
    id: "3",
    titulo: "Outer Wilds",
    genero: "Aventura / Indie",
    plataforma: "PS / PC / Xbox / Switch",
    nota: "9/10",
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  useEffect(() => {
    if (route.params?.novoJogo) {
      setItensSalvos((prev) => [...prev, route.params.novoJogo]);
    }
  }, [route.params?.novoJogo]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Biblioteca</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardJogo
            titulo={item.titulo}
            genero={item.genero}
            plataforma={item.plataforma}
            nota={item.nota}
          />
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>N</Text>
            </View>

            <Text style={styles.titulo}>Nenhum jogo salvo</Text>

            <Text style={styles.descricao}>Sua biblioteca esta vazia</Text>

            <Text style={styles.dica}>
              Explore os jogos e adicione seus favoritos aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
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

  listaVazia: {
    flex: 1,
  },

  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  iconeContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,

    backgroundColor: "#8B5CF6",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 20,
  },

  icone: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F5F3FF",
    marginBottom: 8,
    textAlign: "center",
  },

  descricao: {
    fontSize: 16,
    color: "#B8B5C3",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },

  dica: {
    fontSize: 13,
    color: "#8F8AA3",
    textAlign: "center",
    lineHeight: 20,
  },
});
