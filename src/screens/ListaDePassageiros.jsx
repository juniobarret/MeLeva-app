import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../conf/firebase";
import ButtonRetorno from "../components/Button-retorno";

function ListaDePassageiros() {
  const [passageiros, setPassageiros] = useState([]);

  useEffect(() => {
    const fetchPassageiros = async () => {
      const q = query(
        collection(db, "viagens", "2023-09-29", "passageiros"),
      );
      const querySnapshot = await getDocs(q);
      const passageirosData = [];

      querySnapshot.forEach((doc) => {
        passageirosData.push({ id: doc.id, ...doc.data() });
      });

      setPassageiros(passageirosData);
    };

    fetchPassageiros();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Passageiros</Text>
      <View style={styles.tabelaCabecalho}>
        <Text style={styles.cabecalho}>Nome</Text>
        <Text style={styles.cabecalho}>Faculdade</Text>
        <Text style={styles.cabecalho}>Data</Text>
        <Text style={styles.cabecalho}>Horário</Text>
      </View>
      <FlatList
        data={passageiros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.passageiroItem}>
            <Text style={styles.dado}>{item.nome}</Text>
            <Text style={styles.dado}>{item.faculdade}</Text>
            <Text style={styles.dado}>
              {item.dataCadastro.toDate().toLocaleDateString()}
            </Text>
            <Text style={styles.dado}>
              {item.dataCadastro.toDate().toLocaleTimeString()}
            </Text>
          </View>
        )}
      />
      <ButtonRetorno />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#86BDAA",
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1e7557",
    marginTop: 40,
  },

  tabelaCabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  cabecalho: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e7557",
  },

  passageiroItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },

  dado: {
    flex: 1,
    fontSize: 16,
    color: "#555",
  },
});

export default ListaDePassageiros;
