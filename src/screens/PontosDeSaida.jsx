import { FlatList, StyleSheet, View, Text, React } from "react-native";
import Button from "../components/Button-retorno";
import Menu from "./Menu";


function PontosSaida({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.titulo}>Pontos de Saída</Text>

      <Text style={styles.text}>1º PONTO: Em frente a copiadora COPYVALE </Text>
      <Text style={styles.text}>2º PONTO: Poliesportivo</Text>
      <Text style={styles.text}>3º PONTO: Posto Senhor do Bonfim</Text>
      <Text style={styles.text}>4º PONTO: Guarita do São José</Text>

      <Text style={styles.subtitulo}>HORÁRIO DE SAÍDA: 18h </Text>

      <Button title="Retornar" onPress={(navigation) => navigation.navigate("Menu")} />

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#88c1ad',
  },

  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffff',
    borderRadius: 30,
    padding: 30,
  },

  text: {
    fontSize: 15,
    fontStyle: 'italic',
    width: 200,
    backgroundColor: '#ffffff',
    height: 40,
    margin: 10,
    textAlign: 'left',

    
  },

  titulo: {
    width: 300,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 30,
  },

  subtitulo: {
    color: "#1e7557",
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 30,
  }
  
});

export default PontosSaida;