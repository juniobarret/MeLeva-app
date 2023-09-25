
import { Text, TouchableOpacity } from "react-native";

function Button({titulo, onPress}){
    return <TouchableOpacity style={{
        backgroundColor: "#000000",
        width: 80,
        height: 25,
        alignItems: "center",      
        borderRadius: 10,
        marginTop: 10,
    }}
    onPress={() => navigation.navigate("Menu")}
    >
        <Text style={{
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
        }}>Menu</Text>

    </TouchableOpacity>



}

export default Button;