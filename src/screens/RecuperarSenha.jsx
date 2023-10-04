import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../conf/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function RecuperarSenha({ navigation }) {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  const handleEnviarEmail = () => {
    if (!email) {
      setErro('Por favor, insira seu endereço de e-mail.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('E-mail de redefinição de senha enviado', 'Verifique seu e-mail para redefinir sua senha.');
        navigation.navigate('Login');
      })
      .catch((error) => {
        setErro(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Redefinir Senha</Text>
      <Text style={styles.subtitulo}>Digite seu e-mail para redefinir sua senha.</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {erro ? <Text style={styles.errorMessage}>{erro}</Text> : null}

      <TouchableOpacity style={styles.enviarBtn} onPress={handleEnviarEmail}>
        <Text style={styles.enviarText}>Enviar E-mail de Redefinição</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.voltarText}>Voltar ao Login</Text>
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
  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    color: '#ffffff',
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
  enviarBtn: {
    width: '80%',
    backgroundColor: '#1e7557',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  enviarText: {
    color: '#ffffff',
  },
  voltarText: {
    color: '#ffffff',
    marginTop: 20,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default RecuperarSenha;
