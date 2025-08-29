import React from "react";
import {View, Text, StyleSheet, FlatList, Image, useWindowDimensions, SafeAreaView, } from "react-native";
import catalogoData from "../catalogo.json";

// Definição do modelo json
interface ItemCatalogo {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
  descricao: string;
  imagem: string;
}

export default function CatalogoScreen() {
  const { width } = useWindowDimensions();

  // Constante para definir o número de colunas com base na largura da tela
  const getNumColumns = () => {
    if (width >= 900) {

      return 4; // Telas grandes (computadores)
    }
    if (width >= 600) {
      return 2; // Telas médias (tablets)
    }
    if (width >= 600) {
      return 2; // Telas médias (celular na horizontal)
    }
    return 1; // Telas pequenas (celular na vertical)
  };

  const numColumns = getNumColumns();
  
  // estilo da página
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF8E1",
    },
    listContainer: {
        paddingHorizontal: 8, // Espaçamento nas laterais da lista
    },
    tituloPrincipal: {
      fontSize: width * 0.07,
      fontFamily: "manuscrit",
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
      paddingHorizontal: 16,
      color: "#6B4F31",
    },
    // Estilo do Card ajustado para o layout
    card: {
      flex: 1, // Permite que o card se expanda na coluna
      margin: 10, // Espaçamento entre os cards
      backgroundColor: "#F1E2B8",
      borderRadius: 16,
      padding: width * 0.03,
      alignItems: "center",
      elevation: 4,
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
    },
    image: {
      width: "100%",
      aspectRatio: 16 / 9,
      borderRadius: 12,
      marginBottom: 12,
    },
    cardTitulo: {
      fontSize: width * 0.04 / numColumns, // Ajusta o tamanho da fonte com base no número de colunas
      fontWeight: "bold",
      color: "#6B4F31",
      textAlign: "center",
      marginBottom: 4,
    },
    cardSubtitulo: {
      fontSize: width * 0.035 / numColumns,
      fontStyle: "italic",
      marginBottom: 6,
      color: "#C49A6C",
      textAlign: "center",
    },
    cardAno: {
      fontSize: width * 0.03 / numColumns,
      marginBottom: 6,
      color: "#6B4F31",
    },
    cardDescricao: {
      fontSize: width * 0.032 / numColumns,
      textAlign: "center",
      color: "#333",
      lineHeight: width * 0.05 / numColumns,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={catalogoData as ItemCatalogo[]}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <Text style={styles.tituloPrincipal}>Santos da Igreja Católica</Text>
        }
        contentContainerStyle={styles.listContainer}
        numColumns={numColumns}
        key={numColumns} 
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{ uri: item.imagem }} resizeMode="cover" />
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardSubtitulo}>{item.subtitulo}</Text>
            <Text style={styles.cardAno}>Ano de nascimento: {item.ano}</Text>
            <Text style={styles.cardDescricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
