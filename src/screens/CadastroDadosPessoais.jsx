import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function CadastroDadosPessoais({ navigation }) {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');

  const handleNext = () => {
    // Valide os campos aqui, por exemplo, verificando se todos os campos foram preenchidos corretamente

    // Se os campos estiverem válidos, navegue para a próxima tela
    navigation.navigate('CadastroDadosAcademicos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro - Dados Pessoais</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        onChangeText={(text) => setDataNascimento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        onChangeText={(text) => setGenero(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={(text) => setCPF(text)}
      />
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86BDAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  nextButton: {
    width: '80%',
    backgroundColor: '#1e7557',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: '#ffffff',
  },
});

export default CadastroDadosPessoais;
