import { FlatList, StyleSheet, View, Text, React, TextInput } from "react-native";
import Button from "../components/Button-retorno";
import Menu from "./Menu";


function Reclamacoes({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Reclamações</Text>
        <View>
            <textarea  name="sugestao" placeholder="Digite aqui sua reclamação" style={styles.textarea} required></textarea>
             <button type="submit" style={styles.BotaoReclamacao}>Enviar</button>
        </View>
        

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
  },

    textarea: { 
    width: 400,
    height: 100,
    fontFamily: 'Arial',
    fontSize: 15,

    },

    BotaoReclamacao: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: 80,
    height: 30,
    backgroundColor: '#1e7557',
    borderRadius: 15,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    }

});

export default Reclamacoes;