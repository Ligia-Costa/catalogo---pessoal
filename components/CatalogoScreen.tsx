import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import catalogo from "../catalogo.json";

export default function CatalogoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Santos da Igreja Católica</Text>

      <FlatList
        data={catalogo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.subtitulo}>{item.subtitulo}</Text>
              <Text style={styles.ano}>Ano de nascimento: {item.ano}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
            </View>
          </View>
        )}
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
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6B4F31", 
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#F1E2B8", 
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 10,
  },
  info: {
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B4F31",
  },
  subtitulo: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#C49A6C",
    marginBottom: 4,
  },
  ano: {
    fontSize: 12,
    color: "#444",
    marginBottom: 6,
  },
  descricao: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
});
