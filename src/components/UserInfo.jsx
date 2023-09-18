import { StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";

function UserInfo({}){

    return <View style={styles.containerPrincipal}>

        <View style={styles.containerLinha1}> 
            <Avatar/>
            <View style={styles.containerNome}>
                <Text style={styles.textNome}>Passageiro</Text>
                <Text style={styles.NomeFaculdade}>Faculdade Exemplo</Text>
            </View>

            <View style={styles.statusDia}>
                <Text style={styles.textStatusDia1}>CADASTRO FEITO:</Text>
                <Text style={styles.textStatusDia2}> <img src="https://images.emojiterra.com/twitter/v13.1/512px/2705.png"  width={10} /> Hoje</Text>
            </View>
        </View>
        

        <View style={styles.containerLinha2}>
            <Text style={styles.textEditalPerfil}>Editar Perfil</Text>
        </View>
    </View>


    
}

const styles = StyleSheet.create({

    containerPrincipal: {
        padding: 25,
        backgroundColor:"#3B3B3B", 
        borderRadius: 10,
    },

    containerLinha1: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#3B3B3B", 
        borderRadius: 10,
    },

    containerLinha2: {
        flexDirection: "space-around", 
        padding: 5,
        alignItems: "center",
    },

    textEditalPerfil:{
        color: "#ffffff",
        width: 120,
        textAlign: "center",
        padding: 5,
        fontSize: 12,
        borderColor: "#ffffff",
        borderWidth: 0.5,
        borderRadius: 15,
        marginTop: 20,
    },


    containerNome:{
        marginLeft: 10
    },

    statusDia:{
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
        marginHorizontal: "auto",
    },

    textNome:{
        color: "#ffffff",
        fontSize:25,
        fontWeight: "bold"
    },

    textStatusDia1:{
        color: "#ffffff",
        fontSize:15,
    },

    textStatusDia2:{
        color: "#ffffff",
        fontSize:13,
        marginHorizontal: 6,
    },


    NomeFaculdade: {
        color: "#F3CECE",
        fontSize:13,
        fontStyle: "italic",
    }
});

export default UserInfo;