import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Picker } from "react-native";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../conf/firebase";
import ButtonRetorno from "../components/Button-retorno";

function ListaDePassageiros() {
  const [passageiros, setPassageiros] = useState([]);
  const [filtroData, setFiltroData] = useState("");
  const [filtroFaculdade, setFiltroFaculdade] = useState("Todas");

  useEffect(() => {
    const fetchPassageiros = async () => {
      try {
        const viagemRef = doc(db, "viagens", filtroData);
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

  const faculdadesCores = {
    IFNMG: "#195128",
    UNOPAR: "#0d1c4f",
    ALFA: "#a3550b",
    UNIPAC: "#d1c702",
    DOCTUM: "#414141",
    UNIMONTES: "#029dd1",
  };

  const filtrarPassageiros = () => {
    if (filtroFaculdade === "Todas") {
      return passageiros;
    }
    return passageiros.filter((passageiro) => passageiro.faculdade === filtroFaculdade);
  };

  const passageirosFiltrados = filtrarPassageiros();

  const agruparPorFaculdade = () => {
    const passageirosAgrupados = {};

    passageirosFiltrados.forEach((passageiro) => {
      if (!passageirosAgrupados[passageiro.faculdade]) {
        passageirosAgrupados[passageiro.faculdade] = [];
      }

      passageirosAgrupados[passageiro.faculdade].push(passageiro);
    });

    return passageirosAgrupados;
  };

  const passageirosAgrupados = agruparPorFaculdade();

  const faculdadesOrdenadas = Object.keys(passageirosAgrupados).sort();

  const totalPassageiros = passageirosFiltrados.length;

  return (

    <View style={styles.container}>

      <View style={styles.part1}>
      <Text style={styles.titulo}>Lista de Passageiros</Text>
      <View style={styles.filtroContainer}>
        <Text style={styles.filtroLabel}>Filtro de pesquisa</Text>
        <View style={styles.filtros}>
          <View style={styles.filtroItem}>
            <Text style={styles.filtroText}>Data:</Text>
            <input
              type="date"
              style={styles.filtroInput}
              value={filtroData}
              onChange={(e) => setFiltroData(e.target.value)}
            />
          </View>
          <View style={styles.filtroItem}>
            <Text style={styles.filtroText}>Faculdade:</Text>

            
            <Picker
              style={styles.picker}
              selectedValue={filtroFaculdade}
              onValueChange={(itemValue) => setFiltroFaculdade(itemValue)}
            >
              <Picker.Item label="Todas" value="Todas" />
              {faculdadesOrdenadas.map((faculdade) => (
                <Picker.Item key={faculdade} label={faculdade} value={faculdade} />
              ))}
            </Picker> 

            
          </View>
        </View>
      </View>

      {filtroFaculdade === "Todas" ? (
        <FlatList
          data={faculdadesOrdenadas}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.faculdadeContainer}>
              <Text style={styles.faculdadeTitulo}>{item}</Text>
              {passageirosAgrupados[item].map((passageiro) => (
                <View
                  key={passageiro.id}
                  style={{
                    ...styles.passageiroItem,
                    backgroundColor: faculdadesCores[passageiro.faculdade],
                  }}
                >
                  <Text style={styles.label}>Nome:</Text>
                  <Text style={styles.dado}>{passageiro.nome}</Text>
                </View>
              ))}
            </View>
          )}
        />
      ) : (
        <FlatList
          data={passageirosAgrupados[filtroFaculdade]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                ...styles.passageiroItem,
                backgroundColor: faculdadesCores[item.faculdade],
              }}
            >
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.dado}>{item.nome}</Text>
            </View>
          )}
        />
      )}
      <Text style={styles.totalPassageiros}>
        Total de Passageiros: {totalPassageiros}
      </Text>
      </View>

      <View style={styles.part2}>
        <ButtonRetorno />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
    part1: {
        flex: 1,
        backgroundColor: "#86BDAA",
    },

    part2: {
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",

    },
    
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
    color: "#ffffff",
    marginTop: 40,
  },

  filtroContainer: {
    alignItems: "center",
    marginBottom: 10,
  },

  filtroLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  filtros: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  filtroItem: {
    marginRight: 20,
  },

  filtroText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  filtroInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: 5,
    alignContent: "center",
  },

  picker: {
    flex: 2,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#1e7557",
  },

  faculdadeContainer: {
    marginBottom: 20,
  },

  faculdadeTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffffff",
  },

  passageiroItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#1e7557", 
  },

  label: {
    fontSize: "90%",
    fontWeight: "bold",
    color: "#ffffff",
    paddingHorizontal: 2,
    marginLeft: 8,
  },

  dado: {
    fontSize: "82%",
    color: "#ffffff",
    flex: 1,
    marginLeft: 2,
  },

  totalPassageiros: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "2%",
    marginBottom: "1%",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    color: "#1e7557",
  },
});

export default ListaDePassageiros;
