import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import colors from './Themes/colors.js';
import {ImageBackground} from 'react-native' ;
import logogreen from  './assets/logogreen.png'
import favicon from './assets/favicon.png'


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={favicon} style={styles.img}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    display: "flex",
    width: '100%',
    height: '100%',
    position: 'relative',
  
  }, 
});
