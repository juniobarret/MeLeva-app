import { StyleSheet, Text, View } from "react-native";

function CadastroDoDia({}){

    return <View style={styles.containerPrincipal}>

        <View style={styles.container1}>
            <Text style={styles.textCadastroDoDia}>Cadastro do Dia</Text>
        </View>
    </View>


    
}

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

    textCadastroDoDia:{
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

});

export default CadastroDoDia;