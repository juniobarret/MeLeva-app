import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import Button from "../components/Button-retorno";

function CadastroDoDia({ navigation }) {
  const [nome, setNome] = useState('');
  const [dataAula, setDataAula] = useState('');
  const [faculdade, setFaculdade] = useState('IFNMG');

  const handleCadastro = () => {
    // Lógica para salvar os dados do cadastro
    // Esta função será implementada para interagir com o backend
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer1}>



      </View>
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
          onPress={handleCadastro} // Chamando a função de cadastro
        >
          <Text style={styles.BotaoEnviarText}>Enviar</Text>
        </TouchableOpacity>
      
      
      
      </View>

      {/* Movendo o elemento Button-retorno abaixo do botão "Enviar" */}
      <Button title="Retornar" onPress={() => navigation.navigate("Menu")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#88c1ad", // Mantendo a cor de fundo anterior
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
    flex: 1, // Ocupar metade do espaço no contêiner
    height: 40,
    backgroundColor: "#1e7557",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center", // Alinhar o texto ao centro
    marginTop: 20, // Adicionando um espaçamento superior
  },

  BotaoEnviarText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CadastroDoDia;
