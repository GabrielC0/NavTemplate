import {StyleSheet,Text,View,Image,Button as ButtonNative, } from 'react-native';
import Button from "./Boutton";
import React, { useState } from "react";

export default function App() {
  const [cpt, setcpt] = useState(0);
  return (
    <View style={{alignItems:'center'}}>

      <Image
        style={{marginTop:25}}
      source={require('./Template.png')}/>

      <View style={{justifyContent:"space-between", height:100,width:100,marginTop:20}}>

        <Text style={{marginBottom:20}}>Carte numero {cpt}</Text>

        <Button
        onPress={() => {
          setcpt(cpt + 1);
        }}/>

      </View>
    </View>
  );
}

