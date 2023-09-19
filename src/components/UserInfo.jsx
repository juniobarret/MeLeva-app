import { StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";

function UserInfo({}){

    return <View style={styles.containerPrincipal}>

        <View style={styles.containerLinha1}> 
            <View style={styles.containerUser}>

                    <Avatar/>
                    <View style={styles.containerInfoUser}>
                        <Text style={styles.textNome}>Passageiro</Text>
                        <Text style={styles.NomeFaculdade}>Faculdade Exemplo</Text>
                    </View>
            </View>

            <View style={styles.containerStatus}>
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
        alignItems: "stretch",
        padding: 25,
        margin: "auto",
        width: "95%",
        height: "20%",
        backgroundColor:"#3B3B3B", 
        borderRadius: 10,
    },

    containerLinha1: {
        flexDirection: "row",
        alignItems: "center",
        margin: "20",
        backgroundColor:"#3B3B3B", 
        borderRadius: 10,
    },

    containerLinha2: {
        flexDirection: "space-around", 
        padding: 5,
        alignItems: "center",
    },

    container3: {
        flexDirection: "column",
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
        marginTop: 10,
    },

    containerInfoUser: {
        flexDirection: "column",
        marginLeft: 10,
    },


    containerUser:{
        flexDirection: "row",
        marginLeft: "auto",
        marginHorizontal: 10,
    },

    containerStatus:{
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
        marginHorizontal: "auto",
    },

    textNome:{
        color: "#ffffff",
        fontSize:"1.2rem",
        fontWeight: "bold"
    },

    textStatusDia1:{
        color: "#ffffff",
        fontSize: "0.8rem",
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