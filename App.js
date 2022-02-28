import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import colors from './Themes/colors.js';
import { useFonts } from 'expo-font';
import {ImageBackground} from 'react-native' ;
import home from  './assets/home.png'
import favicon from './assets/favicon.png'


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={home} style={styles.bgimg}>
      <Text style={styles.whitetext}>
        @worldwildlifefund
      </Text>
      <Text style={styles.whitetextsmall}>
        Today Suyash explores the Sahara. Save the Animals Fundraiser.
      </Text>
      </ImageBackground>
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

  bgimg: {
    display: "flex",
    width: '100%',
    height: '100%',
    position: 'relative',
  }, 
  whitetext: {
    top: '87%',
    left: '5%',
    fontSize: 20,
    color: 'white',
  },

  whitetextsmall: {
    top: '87%',
    left: '5%',
    fontSize: 16,
    color: 'white',
  },
});
