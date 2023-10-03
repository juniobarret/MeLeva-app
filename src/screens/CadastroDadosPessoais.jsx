import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Image } from 'react-native';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../conf/firebase';
import { launchImageLibrary } from 'react-native-image-picker'; // Importe o launchImageLibrary

function CadastroDadosPessoais({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [foto, setFoto] = useState(null); // Estado para armazenar a URI da foto

  const handleProximaEtapa = async () => {
    // Valide os campos aqui, se necessário

    // Salve os dados no Firebase Firestore
    const dadosPessoaisRef = collection(db, 'dadosPessoais');
    const novoDocumento = await addDoc(dadosPessoaisRef, {
      nome,
      sobrenome,
      sexo,
      idade,
      cpf,
      foto, // Salve a URI da foto
    });

    console.log('Documento ID: ', novoDocumento.id);

    // Passe os dados para a próxima tela (Dados de Endereço)
    navigation.navigate('CadastroEndereco', {
      dadosPessoais: {
        nome,
        sobrenome,
        sexo,
        idade,
        cpf,
        foto, // Passe a URI da foto para a próxima tela
      },
    });
  };

  const handleEscolherFoto = () => {
    // Configuração para o ImagePicker
    const options = {
      mediaType: 'photo', // Especifique que queremos fotos, não vídeos
      quality: 0.5, // Qualidade da imagem
    };

    // Mostra o launchImageLibrary para selecionar uma foto
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Seleção de foto cancelada');
      } else if (response.errorMessage) {
        console.log('Erro ao selecionar foto: ', response.errorMessage);
      } else {
        // Atualize o estado com a URI da foto selecionada
        setFoto(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro - Dados Pessoais</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome"
          onChangeText={(text) => setNome(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Sobrenome"
          onChangeText={(text) => setSobrenome(text)}
        />
      </View>
      <View style={styles.sexoIdadeView}>
        <View style={styles.sexoView}>
          <Text style={styles.label}>Sexo:</Text>
          <Picker
            selectedValue={sexo}
            style={styles.picker}
            onValueChange={(itemValue) => setSexo(itemValue)}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Prefiro não informar" value="Prefiro não informar" />
          </Picker>
        </View>
        <View style={styles.idadeView}>
          <TextInput
            style={styles.inputText}
            placeholder="Idade"
            onChangeText={(text) => setIdade(text)}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="CPF"
          onChangeText={(text) => setCpf(text)}
          keyboardType="numeric"
        />
      </View>

      {/* Área para carregar a foto */}
      <TouchableOpacity style={styles.fotoContainer} onPress={handleEscolherFoto}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.foto} />
        ) : (
          <View style={styles.fotoPlaceholder}>
            <Text style={styles.fotoTexto}>Carregar Foto</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={handleProximaEtapa}>
        <Text style={styles.textoBotao}>Próxima Etapa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e90ff', // Alterada a cor para a paleta do projeto
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  sexoIdadeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  sexoView: {
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  idadeView: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    marginTop: 10,
    height: '80%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  inputText: {
    height: 50,
    color: '#333',
  },
  picker: {
    height: 50,
    color: '#333',
  },
  botao: {
    width: '80%',
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
  // Estilos para a área de carregar a foto
  fotoContainer: {
    width: '80%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
  },
  fotoPlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  fotoTexto: {
    color: '#ffffff',
    fontSize: 16,
  },
  foto: {
    width: '20',
    height: '20',
    borderRadius: 80,
  },
});

export default CadastroDadosPessoais;
