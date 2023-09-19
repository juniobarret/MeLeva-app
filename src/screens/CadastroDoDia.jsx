import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import Button from "../components/Button-retorno";

function CadastroDoDia({ navigation }) {
  const [nome, setNome] = useState('');
  const [dataAula, setDataAula] = useState('');
  const [faculdade, setFaculdade] = useState('IFNMG'); // Valor padrão selecionado

  const handleCadastro = () => {
    // Lógica para salvar os dados do cadastro
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Cadastro Diário</Text>

        <TextInput
          style={styles.campoFormulario}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.campoFormulario}
          placeholder="Data da Aula"
          value={dataAula}
          onChangeText={setDataAula}
        />

        {/* Seletor de Faculdade */}
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

        <TouchableOpacity
          style={styles.BotaoReclamacao}
          onPress={() => navigation.navigate("Menu")} // Navegar para a tela Menu
        >
          <Text style={styles.BotaoReclamacaoText}>Retornar</Text>
        </TouchableOpacity>

        <Button title="Retornar" onPress={() => navigation.navigate("Menu")} />
      </View>
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

  container2: {
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 30,
    padding: 30,
    minWidth: 350,
  },

  titulo: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 30,
  },

  campoFormulario: {
    width: "100%",
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#1e7557",
  },

  picker: {
    width: "100%",
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#1e7557",
  },

  BotaoReclamacao: {
    marginTop: 10,
    alignItems: "center",
    width: 120,
    height: 40,
    backgroundColor: "#1e7557",
    borderRadius: 20,
    justifyContent: "center",
  },

  BotaoReclamacaoText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CadastroDoDia;
