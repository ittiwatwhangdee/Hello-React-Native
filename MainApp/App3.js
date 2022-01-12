import React from 'react';
import {View, Text, Image, ActivityIndicator, Dimensions} from 'react-native';

export default function App() {
  const activityXPosition = Dimensions.get('window').width / 2 - 25
  const activityYPosition = Dimensions.get('window').height / 2 - 25

  return (
    <View 
      style={{
        flex: 1, 
        backgroundColor: '#FF0', 
        flexDirection: 'column', 

        }}>
      <Text style={{backgroundColor: '#f00', flex: 1}}>CodeMobiles 1#</Text>
      <Text style={{backgroundColor: '#f0f', flex: 1}}>CodeMobiles 2#</Text>
      <Text style={{backgroundColor: '#10f', flex: 1}}>CodeMobiles 3#</Text>
      <Text style={{backgroundColor: '#80f', flex: 1}}>CodeMobiles 4#</Text>

      <Image style={{width: null}} resizeMode="contain" source={require("./assets/codemobiles.png")}></Image>
      <Image style={{width: null, height:200}} resizeMode="contain" source={{uri: 'https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2018/05/1-google-logo.png'}}></Image>
      <ActivityIndicator 
      color='white'
        style={{
          position: "absolute", 
          left: activityXPosition, 
          top: activityYPosition, 
        }} 
          size={50}>    
        </ActivityIndicator>
    </View>
  );
}
