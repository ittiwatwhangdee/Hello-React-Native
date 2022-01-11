import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#FF0', flexDirection: 'column', alignItems:'center'}}>
      <Text style={{backgroundColor: '#f00', flex: 1, width: 100, textAlign: 'center', textAlignVertical: 'center'}}>CodeMobiles 1#</Text>
      <Text style={{backgroundColor: '#f0f', flex: 1,width: 200, textAlign: 'center'}}>CodeMobiles 1#</Text>
      <Text style={{backgroundColor: '#10f', flex: 1,width: 300, textAlign: 'center'}}>CodeMobiles 1#</Text>
      <Text style={{backgroundColor: '#80f', flex: 1,width: '100%', textAlign: 'center'}}>CodeMobiles 1#</Text>
    </View>
  );
}
