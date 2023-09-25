import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function CadastroDadosAcademicos({ navigation }) {
  const [faculdade, setFaculdade] = useState('');
  const [matricula, setMatricula] = useState('');
  const [anoInicio, setAnoInicio] = useState('');
  const [duracaoCurso, setDuracaoCurso] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');

  const handleCadastro = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro - Dados Acadêmicos</Text>
      <TextInput
        style={styles.input}
        placeholder="Faculdade"
        onChangeText={(text) => setFaculdade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        onChangeText={(text) => setMatricula(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano de Início"
        onChangeText={(text) => setAnoInicio(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Duração do Curso"
        onChangeText={(text) => setDuracaoCurso(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Curso"
        onChangeText={(text) => setCurso(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Período"
        onChangeText={(text) => setPeriodo(text)}
      />
      <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
        <Text style={styles.cadastroButtonText}>Cadastrar</Text>
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
  cadastroButton: {
    width: '80%',
    backgroundColor: '#1e7557',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroButtonText: {
    color: '#ffffff',
  },
});

export default CadastroDadosAcademicos;
