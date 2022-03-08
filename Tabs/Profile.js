import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';




// CURRENTLY USING TO DEVELOP NFP RWDS PAGE
/* 
* TODO: 
*   - DYNAMIC ADD/DELETE:
*       - METHOD 1??? Flatlist add/delete, Flatlist of Views, State variable to manage input fields and # of input fields? 
*   - IMAGE PICKER: debug node install and add image picker
*   - CSS ACROSS PAGES: make sure styling is same across nfp pages
*/

export default function Fundraiser() {
  
  const [rwd1, setRwd1] = useState('Reward Level 1');


  // Image picker stuff
  // const [image, setImage] = useState(null);
  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };
  
  return(

      <SafeAreaView>
      <View style={styles.container}>
        {/* <Text style = {styles.blacktext}> Profile </Text> */}

        <View style={styles.headerContainer}>
          <Text style={styles.titles}>Hello</Text>
        </View>

        {/* Image picker here */}
        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View> */}
        
        <View style={styles.allInputFields}>
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

          <View style={styles.singleInputLine}>
            <Image source={require('../assets/Icons/add.png')} style={styles.buttonSize} />
          </View>
        </View>

        <Text style={styles.testing}> {rwd1} </Text>

      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'gray',
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
        top: 500,
    },
    allInputFields: { // container view
      backgroundColor: 'black',
    },
    headerContainer: { // view (including text position)
      backgroundColor: 'gray',
      marginHorizontal: 10,
    },
    titles: { // text
      fontWeight: 'bold',
      fontSize: 30,
      paddingVertical: 15,
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