import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="clickMe1" onPress={() => alert('Hey1')}></Button>
      <View style={{height: 24}}></View>
      <Button
        title="clickMe2"
        onPress={() => {
          console.log('Hey1');
          console.log('Hey1');
        }}></Button>
      <View style={{marginTop: 24}}>
        <Button title="clickMe3" onPress={() => alert('Hey3')}></Button>
      </View>

      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => alert('Hey')}
        style={{
          marginTop: 24,
          borderColor: 'red',
          borderWidth: 1,
          padding: 24,
          borderRadius: 10,
        }}>
        <Text>RUN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => alert('Hey')}
        style={{
          marginTop: 24,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <Image
          style={{width: 200, height: 200}}
          resizeMode="contain"
          source={{
            uri: 'https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2018/05/1-google-logo.png',
          }}></Image>
      </TouchableOpacity>
    </View>
  );
}
