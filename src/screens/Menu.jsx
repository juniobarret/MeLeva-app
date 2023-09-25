import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import UserInfo from "../components/UserInfo";
import MenuItem from "../components/MenuItem";
import CadastroDoDia from "../components/Button-CadastroDoDia00";
import ListaDePassageiros from "../components/ListaDePassageiros00";
import ImgEstudante from "../components/ImgEstudante";

const menuItens = [
  { nome: "Reclamações", rota: "Reclamacoes" },
  { nome: "Pontos de saída", rota: "PontosDeSaida" },
];

function Menu({ navigation }) {
  const handleNavigateToListaDePassageiros = () => {
    navigation.navigate("ListaDePassageiros");
  };

  return (
    <View style={styles.containerPrincipal}>
      <UserInfo />
      <CadastroDoDia />
      <TouchableOpacity onPress={handleNavigateToListaDePassageiros}>
        <ListaDePassageiros />
      </TouchableOpacity>
      <FlatList
        style={styles.FlatList}
        data={menuItens}
        renderItem={({ item }) => (
          <MenuItem
            {...item}
            onPress={() => {
              navigation.navigate(item.rota);
            }}
          />
        )}
        keyExtractor={(item) => item.nome}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#1E7557",
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },

  FlatList: {
    flex: 1,
    marginTop: 20,
    paddingTop: 20,
  },
});

export default Menu;
