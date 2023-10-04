import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../conf/firebase';

function CadastroDadosAcademicos({ navigation, route }) {
  const { dadosPessoais } = route.params; // Recebe os dados pessoais da tela anterior
  const [curso, setCurso] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [anoConclusao, setAnoConclusao] = useState('');
  const [erros, setErros] = useState({});

  const validarCampos = () => {
    const novosErros = {};

    if (!curso) {
      novosErros.curso = 'Campo obrigatório';
    }

    if (!instituicao) {
      novosErros.instituicao = 'Campo obrigatório';
    }

    if (!anoConclusao) {
      novosErros.anoConclusao = 'Campo obrigatório';
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  const handleProximaEtapa = async () => {
    if (validarCampos()) {
      // Combinar os dados pessoais com os dados acadêmicos
      const dadosCompletos = {
        ...dadosPessoais,
        curso,
        instituicao,
        anoConclusao,
      };

      // Salvar todos os dados no Firebase Firestore
      const dadosCompletosRef = collection(db, 'dadosCompletos');
      await addDoc(dadosCompletosRef, dadosCompletos);

      // Exibir dados salvos no console (opcional)
      console.log('Dados completos salvos com sucesso:');
      console.log('Nome:', dadosCompletos.nome);
      console.log('Gênero:', dadosCompletos.genero);
      console.log('Data de Nascimento:', dadosCompletos.dataNascimento);
      console.log('CPF:', dadosCompletos.cpf);
      console.log('Curso:', dadosCompletos.curso);
      console.log('Instituição:', dadosCompletos.instituicao);
      console.log('Ano de Conclusão:', dadosCompletos.anoConclusao);

      // Navegar para a próxima tela (ou fazer qualquer outra ação necessária)
      // Por exemplo, você pode navegar para uma tela de confirmação
      navigation.navigate('CadastroDadosAcesso');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro - Dados Acadêmicos</Text>

      {/* Curso */}
      <View style={styles.inputView}>
        <Text style={styles.label}>Curso:</Text>
        <TextInput
          style={[styles.inputText, erros.curso && styles.inputError]}
          placeholder="Digite o curso"
          onChangeText={(text) => setCurso(text)}
          value={curso}
        />
        {erros.curso && <Text style={styles.errorMessage}>{erros.curso}</Text>}
      </View>

      {/* Instituição */}
      <View style={styles.inputView}>
        <Text style={styles.label}>Instituição:</Text>
        <TextInput
          style={[styles.inputText, erros.instituicao && styles.inputError]}
          placeholder="Digite a instituição"
          onChangeText={(text) => setInstituicao(text)}
          value={instituicao}
        />
        {erros.instituicao && <Text style={styles.errorMessage}>{erros.instituicao}</Text>}
      </View>

      {/* Ano de Conclusão */}
      <View style={styles.inputView}>
        <Text style={styles.label}>Ano de Conclusão:</Text>
        <TextInput
          style={[styles.inputText, erros.anoConclusao && styles.inputError]}
          placeholder="AAAA"
          onChangeText={(text) => setAnoConclusao(text)}
          keyboardType="numeric"
          value={anoConclusao}
          maxLength={4}
        />
        {erros.anoConclusao && <Text style={styles.errorMessage}>{erros.anoConclusao}</Text>}
      </View>

      {/* Botão Próximo */}
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
    borderRadius: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    color: '#333',
  },
  inputText: {
    height: 40,
    color: '#333',
    borderColor: '#ffffff',
    borderWidth: 1,
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
  errorMessage: {
    fontSize: 12,
    color: 'red',
    marginLeft: 5,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default CadastroDadosAcademicos;
