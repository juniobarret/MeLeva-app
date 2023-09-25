import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import Button from "../components/Button-retorno";
import LogoMeLeva from "../components/LogoMeLeva";

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../conf/firebase";



function CadastroDoDia({ navigation }) {
  const [nome, setNome] = useState('');
  const [dataAula, setDataAula] = useState('');
  const [faculdade, setFaculdade] = useState('IFNMG');

  // PARTE DO FIREBASE:

  const handleCadastro = async () => {
      const passageiro = {
        nome: nome,
        faculdade: faculdade,
        dataCadastro: new Date(),
      };
      // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "viagens",dataAula,"passageiros"), passageiro);
console.log("Passageiro cadastrado com o ID: ", docRef.id);
// 

  };
   
  
  return (
    <View style={styles.container}>
      

      <View style={styles.formContainer1}>
    
      </View>
      <LogoMeLeva />
      <View style={styles.formContainer}>
        
        <Text style={styles.titulo}>Cadastro Diário</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.campoNome}
            placeholder="Digite o nome"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Faculdade:</Text>
          <Picker
            selectedValue={faculdade}
            style={styles.picker}
            onValueChange={(itemValue) => setFaculdade(itemValue)}
          >
            <Picker.Item label="IFNMG" value="IFNMG" />
            <Picker.Item label="ALFA" value="ALFA" />
            <Picker.Item label="UNOPAR" value="UNOPAR" />
            <Picker.Item label="UNIPAC" value="UNIPAC" />
            <Picker.Item label="DOCTUM" value="DOCTUM" />
            <Picker.Item label="UNIMONTES" value="UNIMONTES" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data:</Text>
          <input
            type="date"
            style={styles.campoData}
            placeholder="Data da Aula"
            value={dataAula}
            onChange={(e) => setDataAula(e.target.value)}
          />
        </View>

        <TouchableOpacity
          style={styles.BotaoEnviar}
          onPress={handleCadastro} 
        >
          <Text style={styles.BotaoEnviarText}>Enviar</Text>
        </TouchableOpacity>
      
      
      
      </View>

      
      <Button title="Retornar" onPress={() => navigation.navigate("Menu")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#88c1ad", 
  },

  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    maxWidth: 400,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },

  campoNome: {
    flex: 2,
    height: 40,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  campoData: {
    flex: 2,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  picker: {
    flex: 2,
    height: 40,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  BotaoEnviar: {
    backgroundColor: "#1e7557",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center", 
    width: "22%",
    height: "10%",
    marginTop:  10,
    marginHorizontal: "75%",
    
  },

  BotaoEnviarText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",


  },
});

export default CadastroDoDia;
