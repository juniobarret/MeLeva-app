// CadastroDadosAcademicos.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../conf/firebase';

function CadastroDadosAcademicos({ route, navigation }) {
  const { dadosPessoais } = route.params;
  const [faculdade, setFaculdade] = useState('');
  const [matricula, setMatricula] = useState('');
  const [periodo, setPeriodo] = useState('');

  const handleProximaEtapa = async () => {
    // Valide os campos aqui, se necessário

    // Salve os dados no Firebase Firestore
    const dadosAcademicosRef = collection(db, 'dadosAcademicos');
    await addDoc(dadosAcademicosRef, {
      ...dadosPessoais,
      faculdade,
      matricula,
      periodo,
    });

    // Logs de confirmação
    console.log('Faculdade salva com sucesso:', faculdade);
    console.log('Matrícula salva com sucesso:', matricula);
    console.log('Período salvo com sucesso:', periodo);

    // Passe os dados para a próxima tela (CadastroDadosAcesso)
    navigation.navigate('CadastroDadosAcesso', {
      dadosPessoais: {
        ...dadosPessoais,
        faculdade,
        matricula,
        periodo,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro - Dados Acadêmicos</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Faculdade"
          onChangeText={(text) => setFaculdade(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Matrícula"
          onChangeText={(text) => setMatricula(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Período"
          onChangeText={(text) => setPeriodo(text)}
        />
      </View>
      <TouchableOpacity style={styles.botao} onPress={handleProximaEtapa}>
        <Text style={styles.textoBotao}>Próximo</Text>
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
    color: '#ffffff',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputText: {
    height: 50,
    color: '#333',
  },
  botao: {
    width: '30%',
    backgroundColor: '#1e7557',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#ffffff',
  },
});

export default CadastroDadosAcademicos;
