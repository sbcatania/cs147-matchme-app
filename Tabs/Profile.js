import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';



// CURRENTLY USING TO DEVELOP NFP RWDS PAGE

export default function Fundraiser() {
  
  const [rwd1, setRwd1] = useState('Reward Level 1');
  
  return(
      <View style={styles.container}>
        <Text style = {styles.blacktext}> Profile </Text>
        
        <View style={styles.singleInputLine}> 
          <TextInput 
          style={styles.input} 
          placeholder='Reward Level 1' 
          autoCapitalize='words'
          onChangeText={(rwd1) => setRwd1(rwd1)} />
        
          <Image source={require('../assets/Icons/user.png')} />
        </View> 

        {/* GOAL: get a list of things to add/delete dynamically */}
        <View style={styles.singleInputLine}>
          {/* item 1 */}
          {/* item 2 */}
        </View>
        
      
        <Text style={styles.testing}> {rwd1} </Text>

      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    blacktext: {
        letterSpacing: 4,
        top: '7%',
        left: '38%',
        color: 'black',
        fontSize: 20,
      },
    input: {
        backgroundColor: '#F2F2F2',
        // placeholderTextColor: 'black',
        padding: 8,
        borderRadius: 10,
        marginVertical: 8,
        width: '80%',
        height: 30,
    },
    testing: { // text
        position: 'absolute',
        left: 0,
        top: 300,
    },
    singleInputLine: { // view
        margin: 10,
        flex: 1,
        flexDirection: 'row',

    }
});