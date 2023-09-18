import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-web";

function MenuItem({nome, onPress}){
    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>

            <Text style={styles.text}>{nome}</Text>

    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        flexDirection: "column",
        padding: 5,
        marginVertical: 2,
    },


    text:{
        width: 210,
        alignContent: "left",
        fontSize: 15,
        color: "#ffffff"
    }
})

export default MenuItem;