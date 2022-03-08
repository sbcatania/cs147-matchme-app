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

          <Pressable style={styles.minusButtonPressable}>
            <Image source={require('../assets/Icons/minus.png')} style={styles.buttonSize} />
          </Pressable>
          
        </View> 

        {/* GOAL: get a list of things to add/delete dynamically */}
        <View style={styles.singleInputLine}>
          {/* item 1 */}
          {/* item 2 */}
        </View>

        <View style={styles.singleInputLine}>
          <Image source={require('../assets/Icons/add.png')} style={styles.buttonSize} />
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
        position: 'absolute',
        left: 5,
        bottom: 2,
    },
    testing: { // text
        position: 'absolute',
        left: 0,
        top: 300,
    },
    singleInputLine: { // view
        backgroundColor: 'firebrick',
        height: 50,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center', // horizontal movement on x axis
        alignContent: 'center',
    },
  buttonSize: { // handle image style of small button
      resizeMode: 'stretch', 
      width:50, 
      height:50,
    },
  minusButtonPressable: { // handle position of minus button
      // backgroundColor: 'blue', // just to see where the container is
      position: 'absolute', 
      right: 0, 
      top: 3,
    },
});