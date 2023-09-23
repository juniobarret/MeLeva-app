


import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CadastroDoDia from "../screens/CadastroDoDia";
import { useNavigation } from "@react-navigation/native";

const ButtonCadastroDoDia = () => 

{
  const navigation = useNavigation();

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.botaoCadastroDoDia}
          onPress={() => navigation.navigate("CadastroDoDia")}
        >
          <Text style={styles.botaoText}>Cadastro do dia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


/* const ButtonCadastroDoDia = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container1}>
        <Text style={styles.textCadastroDoDia}>Cadastro do dia</Text>
      </View>
    </View>
  );
};
 */

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
    width: 210,
    height: 40,
    textAlign: "center",
  },

  botaoCadastroDoDia: {
    backgroundColor: "#00000020",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: 20,
  },

  botaoText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ButtonCadastroDoDia;