import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from "react-native";
import catalogo from "../catalogo.json";

// Mapeamento de imagens locais
const imagens = {
  "saofran.jpg": require("../assets/saofran.jpg"),
  "santateresa.jpg": require("../assets/santateresa.jpg"),
  "saojoao.jpg": require("../assets/saojoao.jpg"),
  "santateresinha.jpg": require("../assets/santateresinha.jpg"),
  "santoantonio.jpg": require("../assets/santoantonio.jpg"),
  "saobenedito.jpg": require("../assets/saobenedito.jpg"),
};

export default function CatalogoScreen() {
  const screenWidth = Dimensions.get("window").width;

  // Definir número de colunas conforme largura da tela
  let numColumns = 1;
  if (screenWidth >= 1200) {
    numColumns = 4;
  } else if (screenWidth >= 900) {
    numColumns = 3;
  } else if (screenWidth >= 600) {
    numColumns = 2;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Santos da Igreja Católica</Text>

      <FlatList
        data={catalogo}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={imagens[item.imagem]} style={styles.image} />
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitulo}</Text>
            <Text style={styles.cardYear}>Ano de nascimento: {item.ano}</Text>
            <Text style={styles.cardDesc}>{item.descricao}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#6B4F31",
  },
  list: {
    justifyContent: "center",
    alignItems: "center", // centraliza na tela grande
  },
  card: {
    width: 250, // largura fixa do card
    backgroundColor: "#F1E2B8",
    borderRadius: 12,
    padding: 12,
    margin: 8,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: "center", // garante centralização
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6B4F31",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 6,
    color: "#C49A6C",
    textAlign: "center",
  },
  cardYear: {
    fontSize: 12,
    marginBottom: 6,
    color: "#6B4F31",
  },
  cardDesc: {
    fontSize: 13,
    textAlign: "center",
    color: "#333",
  },
});