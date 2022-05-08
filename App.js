import * as React from 'react';
import { Button,View,Text,Image,StyleSheet,Pressable,marginLeft} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondeTemplate from "./Seconde-T";
import FirstTemplate from "./First-T";
import ThirdTemplate from "./Third-T";



function Home({ navigation }) {
  return (
    <View>
      <FirstTemplate/>
      <Pressable style={{elevation: 1,position: 'absolute',justifyContent:"center",
        width:260,height:410,marginLeft:50,marginTop:40}} 
        onPress={() => navigation.navigate('Spécificité')}>
      </Pressable>

      <Pressable style={{elevation: 1,position: 'absolute',justifyContent:"center",
        width:250,height:50,marginLeft:60,bottom:2}} 
        onPress={() => navigation.navigate('Cartes enregistré')}>
      </Pressable>
    </View>
  );
}

function SpécificitéScreen() {
  return (
    <View>
      <SecondeTemplate/>
    </View>
  );
  
}

function CartesScreen() {
  return (
    <View>
      <ThirdTemplate/>
    </View>
  );
  
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Template" component={Home}/>
        <Stack.Screen name="Cartes enregistré" component={CartesScreen}/>
        <Stack.Screen name="Spécificité" component={SpécificitéScreen}/>
      </Stack.Navigator>      
    </NavigationContainer>
  );
}


export default App;