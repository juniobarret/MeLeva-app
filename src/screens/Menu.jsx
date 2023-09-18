import { FlatList, StyleSheet, Text, View } from "react-native";
import UserInfo from "../components/UserInfo";
import MenuItem from "../components/MenuItem";
import CadastroDoDia from "../components/CadastroDoDia";
import ListaDePassageiros from "../components/ListaDePassageiros";

/* const menuItens = [
    {nome: "Cadastro do Dia", rota:"Principal"},
    {nome: "Avisos"},
    {nome: "Agenda", rota:"Agenda"},
    {nome: "Horarios"},
    {nome: "Calendario Escolar"},
    {nome: "Sair"}
] */

function Menu({navigation}){
    return <View style={styles.containerPrincipal}>
        <UserInfo/>
        <CadastroDoDia/>
        <ListaDePassageiros/>


       {/*  <FlatList style={styles.FlatList}
            data={menuItens}
            renderItem={({item})=><MenuItem {...item} onPress={()=>{
                navigation.navigate(item.rota);
            }} />}
            keyExtractor={item=>item.nome}
        />
         */}
    </View>
}

const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: "#1E7557",
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15       
    },

    FlatList: {
        flex: 1,
        marginTop: 20,
        paddingTop: 20,
        alignContent: "center",

    },

})

export default Menu;