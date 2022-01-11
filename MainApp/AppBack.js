import React from 'react';
import {View, Text, Button} from 'react-native';

export default function App() {
  const message = "Lek";
  const textStyle = {color: '#ffff00'}

  return (
    <View
      style={{
        backgroundColor: '#f00',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Button title="ClickMe"></Button>
      <Text style={textStyle}>{message}</Text>
      <Text style={textStyle}>CodeMobile</Text>
      <Text style={textStyle}>CodeMobile</Text>
    </View>
  );
}
