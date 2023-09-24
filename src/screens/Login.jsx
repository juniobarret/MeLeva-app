import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LogoMeLeva from '../components/LogoMeLeva';
import { auth } from '../conf/firebase';


  function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        if (email && password) {
          // Use a função signInWithEmailAndPassword para fazer login com email e senha
          await auth().signInWithEmailAndPassword(email, password);
  
          // Se o login for bem-sucedido, você pode redirecionar para a próxima tela
          navigation.navigate('TelaPrincipal');
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      } catch (error) {
        // Em caso de erro, trate o erro de autenticação aqui
        // Você pode exibir uma mensagem de erro para o usuário ou fazer o que for necessário
        alert('Erro de autenticação: ' + error.message);
      }
    };

  return (
    <View style={styles.container}>
      <LogoMeLeva />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Senha..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.signupText}>Não possui uma conta? Cadastre-se aqui.</Text>
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
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffffff',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#003f5c',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#1e7557',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: '#ffffff',
  },
  signupText: {
    color: '#ffffff',
    marginTop: 20,
  },
});

export default Login;