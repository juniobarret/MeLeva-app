import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CadastroDoDia from "../screens/CadastroDoDia"; 

const ButtonCadastroDoDia = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container1}>
        <Text style={styles.textCadastroDoDia}>Cadastro do dia</Text>
        <TouchableOpacity style={styles.botaoCadastroDoDia}>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  containerPrincipal: {
    padding: 25,
    borderRadius: 10,
  },

  container1: {
    flexDirection: "space-around",
    padding: 5,
    alignItems: "center",
  },

  textCadastroDoDia: {
    color: "#FFFFFF",
    fontSize: 15,
    textShadowColor: "#000000",
    backgroundColor: "#00000020",
    width: 210,
    height: 40,
    textAlign: "center",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: 20,
  },

  botaoCadastroDoDia: {
    backgroundColor: "#1e7557",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  botaoText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ButtonCadastroDoDia;
