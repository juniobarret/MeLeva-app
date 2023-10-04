import Login from "../screens/Login";
import Menu from "../screens/Menu";
import PontosDeSaida from "../screens/PontosDeSaida";
import Reclamacoes from "../screens/Reclamacoes";
import CadastroDoDia from "../screens/CadastroDoDia";
import ListaDePassageiros from "../screens/ListaDePassageiros";
import CadastroDadosPessoais from "../screens/CadastroDadosPessoais"; 
import CadastroDadosAcademicos from "../screens/CadastroDadosAcademicos"; 

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import CadastroDadosAcesso from "../screens/CadastroDadosAcesso";
import RecuperarSenha from "../screens/RecuperarSenha";

const Stack = createNativeStackNavigator();

function Routes() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {<Stack.Screen name="Login" component={Login} /> }

          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: false }} />

          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} /> 

          <Stack.Screen name="CadastroDoDia" component={CadastroDoDia} />

          <Stack.Screen name="Reclamacoes" component={Reclamacoes} options={{ headerShown: false }} />

          <Stack.Screen name="PontosDeSaida" component={PontosDeSaida} options={{ headerShown: false }} />

          <Stack.Screen name="ListaDePassageiros" component={ListaDePassageiros} options={{ headerShown: false }} /> 
      
          <Stack.Screen name="CadastroDadosPessoais" component={CadastroDadosPessoais} />
  

          <Stack.Screen name="CadastroDadosAcademicos" component={CadastroDadosAcademicos} /> 

          <Stack.Screen name="CadastroDadosAcesso" component={CadastroDadosAcesso} />




        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Routes;
