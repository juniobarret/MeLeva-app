import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../conf/firebase";
import ButtonRetorno from "../components/Button-retorno";

function ListaDePassageiros() {
  const [passageiros, setPassageiros] = useState([]);
  const [filtroData, setFiltroData] = useState("");

  useEffect(() => {
    const fetchPassageiros = async () => {
      try {
        const viagemRef = doc(db, "viagens", filtroData); // Referência para o documento de viagem correto
        const q = query(collection(viagemRef, "passageiros"));

        const querySnapshot = await getDocs(q);
        const passageirosData = [];

        querySnapshot.forEach((doc) => {
          passageirosData.push({ id: doc.id, ...doc.data() });
        });

        setPassageiros(passageirosData);
      } catch (error) {
        console.error("Erro ao buscar passageiros: ", error);
      }
    };

    if (filtroData) {
      fetchPassageiros();
    }
  }, [filtroData]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Passageiros</Text>
      <View style={styles.filtroContainer}>
        <Text style={styles.filtroLabel}>Filtrar por Data:</Text>
        <input
          type="date"
          style={styles.filtroInput}
          value={filtroData}
          onChange={(e) => setFiltroData(e.target.value)}
        />
      </View>
      <FlatList
        data={passageiros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.passageiroItem}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.dado}>{item.nome}</Text>
            
            <Text style={styles.label}>Faculdade:</Text>
            <Text style={styles.dado}>{item.faculdade}</Text>
            
            <Text style={styles.label}>Data:</Text>
            <Text style={styles.dado}>{item.dataCadastro.toDate().toLocaleDateString()}</Text>
            
            <Text style={styles.label}>Horário:</Text>
            <Text style={styles.dado}>{item.dataCadastro.toDate().toLocaleTimeString()}</Text>
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

  filtroContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  filtroLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },

  filtroInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#1e7557",
  },

  passageiroItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },

  dado: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },
});

export default ListaDePassageiros;
