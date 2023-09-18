import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function CadastroDiario() {
  const [nome, setNome] = useState('');
  const [dataAula, setDataAula] = useState('');
  const [faculdade, setFaculdade] = useState('');

  const handleCadastro = () => {
    // Lógica para salvar os dados do cadastro
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro Diário</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data da Aula"
        value={dataAula}
        onChangeText={setDataAula}
      />
      <TextInput
        placeholder="Faculdade"
        value={faculdade}
        onChangeText={setFaculdade}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
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

export default CadastroDiario;
