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
    <View style={styles.container}>
      <Text style={styles.text}>Enter the name of the card:</Text>
      <TextInput
        style={styles.input}
        placeholder="name of the card"
        value={name}
        onChangeText={txtHandler}
      />
      <View style={styles.result}>
        <Text style={styles.text}>
          {`${name}`}
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  text: {
    fontSize: 20,
    flexDirection:'column',
    width: 200,
    height:50,
    marginRight:100,
  },
  input: {
    padding: 10,
    marginVertical: 20,
    width: 200,
    height:50,
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    justifyContent:"center",

  },
  result: {
    marginTop: 30,
    paddingHorizontal: 30,
    display: 'flex',

  }
});
