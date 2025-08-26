import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import catalogoData from '../catalogo.json'; 

// Definição do modelo json
interface Santo {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
  data: number;
}

const CatalogoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Meu Catálogo de Santos</Text>
      <FlatList
        data={catalogoData as Santo[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardSubtitulo}>{item.subtitulo}</Text>
            <Text style={styles.cardAno}>Nascimento: {item.ano}</Text>
            <Text style={styles.cardAno}>Falecimento: {item.data}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2BE8B', // fundo
    paddingTop: 50, // Espaçamento superior para não colidir com a barra de status
    paddingHorizontal: 20,
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 25,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#ffcaa1ff', 
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#694b31ff',
    marginBottom: 5,
  },
  cardSubtitulo: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  cardAno: {
    fontSize: 14,
    color: '#95a5a6',
    fontStyle: 'italic',
  },
});

export default CatalogoScreen;