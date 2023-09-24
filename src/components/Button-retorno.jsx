
import { Text, TouchableOpacity } from "react-native";

function Button({titulo, onPress}){
    return <TouchableOpacity style={{
        backgroundColor: "#1E7557",
        width: 30,
        height: 30,
        padding: 5,
        margin: 10,        
        borderRadius: 10,
    }}
    onPress={() => navigation.navigate("Menu")}
    >
        <img src="https://cdn-icons-png.flaticon.com/512/60/60793.png" width={15} alt="Botão de Retorno" />
    </TouchableOpacity>



}

export default Button;