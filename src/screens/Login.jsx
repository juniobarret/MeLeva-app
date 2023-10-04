import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LogoMeLeva from '../components/LogoMeLeva';
import { auth } from '../conf/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; 

function Login({ navigation }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Menu'); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleEsqueceuSenha = () => {
    navigation.navigate('RecuperarSenha');
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
      <View style={styles.esqueceuSenhaContainer}>
        <TouchableOpacity onPress={handleEsqueceuSenha}>
          <Text style={styles.esqueceuSenhaText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CadastroDadosPessoais')}>
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
  esqueceuSenhaContainer: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  esqueceuSenhaText: {
    color: 'black',
    fontSize: 12,
    textShadowColor: '#ffffff',
  },
});

export default Login;
