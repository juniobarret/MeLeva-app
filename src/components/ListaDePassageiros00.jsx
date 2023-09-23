import { StyleSheet, Text, View } from "react-native";

function ListaDePassageiros({}){

    return <View style={styles.containerPrincipal}>

        <View style={styles.container1}>
            <Text style={styles.textEditalPerfil}>LISTA DE PASSAGEIROS</Text>
        </View>
    </View>


    
}

const styles = StyleSheet.create({

    containerPrincipal: {
        borderRadius: 10,
    },


    container1: {
        flexDirection: "space-around", 
        padding: 5,
        alignItems: "center",
    },

    textEditalPerfil:{
        color: "#FFFFFF",
        fontWeight: "bold",
        textDecorationLine: "underline",
        width: 150,
        textAlign: "center",
        fontSize: 12,
    },

});

export default ListaDePassageiros;