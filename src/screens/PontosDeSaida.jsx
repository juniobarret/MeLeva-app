import React from 'react';
import { View, Text, StyleSheet, FlatListl } from 'react-native';

import 

function PontosSaidaScreen() {
  return (
    <View style={styles.container}>
      <Text>Pontos de Saída</Text>
      <Text>Ponto 1: Local A</Text>
      <Text>Ponto 2: Local B</Text>
      <Text>Ponto 3: Local C</Text>
      {/* Adicione mais pontos de saída conforme necessário */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PontosSaidaScreen;
