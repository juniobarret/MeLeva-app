import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text, TextInput } from "react-native";
import Button from "../components/Button-retorno";
import Menu from "./Menu";



function CadastroDoDia() {
  const [nome, setNome] = useState('');
  const [dataAula, setDataAula] = useState('');
  const [faculdade, setFaculdade] = useState('');

  const handleCadastro = () => {
    // Lógica para salvar os dados do cadastro
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Cadastro Diário</Text>
        <TextInput style={styles.campoFormulario}
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

        <Button title="Retornar" onPress={(navigation) => navigation.navigate("Menu")} />
      </View>



      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#88c1ad',
  },

  container2: {
    alignItems: 'center',
    backgroundColor:'#ffff',
    borderRadius: 30,
    padding: 30,
  },

  text: {
    fontSize: 15,
    fontStyle: 'italic',
    width: 200,
    backgroundColor: '#ffffff',
    height: 40,
    margin: 10,
    textAlign: 'left',
  },

  titulo: {
    width: 300,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 30,
  },

  subtitulo: {
    color: "#1e7557",
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 30,
  },

  campoFormulario: {
    width: 300,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 10,
    textAlign: 'left',
    paddingLeft: 10,
  },
  


});

export default CadastroDoDia;
