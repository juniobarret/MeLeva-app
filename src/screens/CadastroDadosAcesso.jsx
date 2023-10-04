import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importe a função apropriada do Firebase Authentication
import { auth } from '../conf/firebase'; // Importe a instância do Firebase Authentication

function CadastroDadosAcesso({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [erros, setErros] = useState({});

  const validarCampos = () => {
    const novosErros = {};

    if (!email) {
      novosErros.email = 'Campo obrigatório';
    }

    if (!senha) {
      novosErros.senha = 'Campo obrigatório';
    }

    if (senha !== repetirSenha) {
      novosErros.repetirSenha = 'As senhas não coincidem';
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  const handleCadastro = async () => {
    if (validarCampos()) {
      try {
        // Crie o usuário no Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

        // O usuário foi criado com sucesso
        console.log('Usuário criado com sucesso:');
        console.log('Email:', userCredential.user.email);

        // Navegue para a próxima tela (ou faça qualquer outra ação necessária)
        // Por exemplo, você pode navegar para uma tela de confirmação
        navigation.navigate('Login');
      } catch (error) {
        // Trate qualquer erro que possa ocorrer durante o cadastro
        console.error('Erro ao criar o usuário:', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro - Dados de Acesso</Text>

      {/* Email */}
      <View style={styles.inputView}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={[styles.inputText, erros.email && styles.inputError]}
          placeholder="Digite seu email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        {erros.email && <Text style={styles.errorMessage}>{erros.email}</Text>}
      </View>

      {/* Senha */}
      <View style={styles.inputView}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={[styles.inputText, erros.senha && styles.inputError]}
          placeholder="Digite sua senha"
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
        {erros.senha && <Text style={styles.errorMessage}>{erros.senha}</Text>}
      </View>

      {/* Repetir Senha */}
      <View style={styles.inputView}>
        <Text style={styles.label}>Repetir Senha:</Text>
        <TextInput
          style={[styles.inputText, erros.repetirSenha && styles.inputError]}
          placeholder="Repita sua senha"
          onChangeText={(text) => setRepetirSenha(text)}
          value={repetirSenha}
          secureTextEntry
        />
        {erros.repetirSenha && <Text style={styles.errorMessage}>{erros.repetirSenha}</Text>}
      </View>

      {/* Botão Cadastrar */}
      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
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

export default CadastroDadosAcesso;
