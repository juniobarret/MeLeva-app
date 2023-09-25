import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button-retorno";
import Menu from "./Menu";

function Reclamacoes({ navigation }) {
  const [reclamacao, setReclamacao] = useState(""); 

  const handleEnviarReclamacao = () => {
    console.log("Reclamação enviada:", reclamacao);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Reclamações</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui sua reclamação"
          multiline
          numberOfLines={10}
          value={reclamacao}
          onChangeText={(text) => setReclamacao(text)}
        />

        <TouchableOpacity
          style={styles.BotaoReclamacao}
          onPress={handleEnviarReclamacao}
        >
          <Text style={styles.BotaoReclamacaoText}>Enviar</Text>
        </TouchableOpacity>

        <Button title="Retornar" onPress={() => navigation.navigate("Menu")} />
      </View>
    </ScrollView>
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

  textInput: {
    width: "100%",
    height: 300, 
    fontFamily: "Arial",
    fontSize: 16,
    backgroundColor: "#ffffff",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#1e7557",
    borderRadius: 10,
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

export default Reclamacoes;
