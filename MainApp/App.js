import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('React Native!')

  const onClickHandler = () => {
    setName('Test is Done!')
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button title='Update State' onPress={onClickHandler} style={styles.button}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#000000',
    borderRadius: 10,
  },
  text: {
    color:'#000000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',

  },
  button:{
    width: 200,
    height: 60,
  }

});

export default App;
