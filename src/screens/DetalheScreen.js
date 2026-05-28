import { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const jogoMock = {
  titulo: "Outer Wilds",
  genero: "Aventura / Indie",
  plataforma: "PS / PC / Xbox / Switch",
  nota: "9/10",

  sinopse:
    "Um explorador espacial revive os mesmos 22 minutos enquanto desvenda os misterios de um antigo sistema solar preso a beira do fim.",
};

export default function DetalheScreen({ route }) {
  const { titulo, genero, plataforma, nota, sinopse } =
    route?.params ?? jogoMock;

  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>{titulo[0]}</Text>
          </View>

          <Text style={styles.heroTitulo}>{titulo}</Text>

          <Text style={styles.heroSubtitulo}>{genero}</Text>

          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>

              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>

            <View style={styles.metaSeparador} />

            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>

              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>

          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setIsSalvo((prev) => !prev)}
          style={[styles.botao, isSalvo && styles.botaoAtivo]}
        >
          <Text style={styles.botaoTexto}>
            {isSalvo ? "Remover da Lista" : "Adicionar a Lista"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121018",
  },

  hero: {
    backgroundColor: "#18141F",
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
  },

  heroIcone: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#8B5CF6",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 14,
  },

  heroIconeTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  heroTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F5F3FF",
    textAlign: "center",
    marginBottom: 6,
  },

  heroSubtitulo: {
    fontSize: 14,
    color: "#B8B5C3",
    marginBottom: 16,
  },

  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,

    backgroundColor: "#241D33",

    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },

  metaItem: {
    alignItems: "center",
  },

  metaLabel: {
    fontSize: 11,
    color: "#B8B5C3",
    marginBottom: 2,
  },

  metaValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  metaSeparador: {
    width: 1,
    height: 28,
    backgroundColor: "#4A3D68",
  },

  secao: {
    margin: 16,
    backgroundColor: "#1E1B26",
    borderRadius: 12,
    padding: 16,
  },

  secaoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F5F3FF",
    marginBottom: 10,
  },

  detalheTexto: {
    fontSize: 14,
    color: "#B8B5C3",
    lineHeight: 22,
  },

  botao: {
    margin: 16,
    marginTop: 4,

    backgroundColor: "#8B5CF6",

    borderRadius: 12,
    paddingVertical: 14,

    alignItems: "center",

    marginBottom: 32,
  },

  botaoAtivo: {
    backgroundColor: "#A78BFA",
  },

  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
