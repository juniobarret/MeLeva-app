import { FlatList, StyleSheet, Text, View } from "react-native";
import UserInfo from "../components/UserInfo";
import MenuItem from "../components/MenuItem";

const menuItens = [
    {nome: "Cadastro do Dia", rota:"Principal"},
    {nome: "Avisos"},
    {nome: "Agenda", rota:"Agenda"},
    {nome: "Horarios"},
    {nome: "Calendario Escolar"},
    {nome: "Sair"}
]

function Menu({navigation}){
    return <View style={styles.container}>
        <UserInfo/>
        <FlatList 
            data={menuItens}
            renderItem={({item})=><MenuItem {...item} onPress={()=>{
                navigation.navigate(item.rota);
            }} />}
            keyExtractor={item=>item.nome}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E7557",
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15       
    }
})

export default Menu;