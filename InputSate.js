import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TextInput,
  Button,
} from 'react-native';



export default function App() {


  const [name, setName] = useState('');

  const txtHandler = (enteredName) => {
    setName(enteredName);
  };

  return (
    <View style={{}}>
      <Text style={{}}>Enter the name of the card:</Text>
      <TextInput
        style={{}}
        placeholder="name of the card"
        value={name}
        onChangeText={txtHandler}
      />
    </View>
  );
}

