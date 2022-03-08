import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { COLORS } from '../Constants';
import Search from './Search'
// import * as ImagePicker from 'expo-image-picker';

// CURRENTLY USING TO DEVELOP NFP RWDS PAGE
/* 
* TODO: 
*   - IMAGE PICKER: debug node install and add image picker
*   - CSS ACROSS PAGES: make sure styling is same across nfp pages
* 
*   ABANDON: 
*   - DYNAMIC ADD/DELETE:
*       - METHOD 1??? Flatlist add/delete, Flatlist of Views, State variable to manage input fields and # of input fields? 
*       - https://stackoverflow.com/questions/63712680/how-to-dynamically-add-delete-view-in-react-native
*/

export default function Fundraiser() {
  
  const [rwd1, setRwd1] = useState('Reward Level 1');
  const [rwd2, setRwd2] = useState('Reward Level 2');
  const [rwd3, setRwd3] = useState('Reward Level 3');

  // NAVIGATION: Setup nav between pages
  const navigation = useNavigation();

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

      <SafeAreaView styles={styles.safeAreaContainer}>
      <View style={styles.container}>
        {/* <Text style = {styles.blacktext}> Profile </Text> */}

        <View style={styles.headerContainer}>
          <Text style={styles.titles}>Donor Rewards</Text>
        </View>

        {/* Image picker here */}
        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View> */}
        
        <View style={styles.mainContent}>
          <View style={styles.singleInputLine}> 
            
            <TextInput 
            style={styles.input} 
            placeholder='Reward Level 1' 
            autoCapitalize='words'
            onChangeText={(rwd1) => setRwd1(rwd1)} />

            <Pressable style={styles.checkButtonPressable}>
              <Image source={require('../assets/Icons/check.png')} style={styles.buttonSize} />
            </Pressable>
          </View> 

          <View style={styles.singleInputLine}> 
            
            <TextInput 
            style={styles.input} 
            placeholder='Reward Level 2' 
            autoCapitalize='words'
            onChangeText={(rwd2) => setRwd2(rwd2)} />

            <Pressable style={styles.checkButtonPressable}>
              <Image source={require('../assets/Icons/check.png')} style={styles.buttonSize} />
            </Pressable>
            
          </View> 

          <View style={styles.singleInputLine}> 
            
            <TextInput 
            style={styles.input} 
            placeholder='Reward Level 3' 
            autoCapitalize='words'
            onChangeText={(rwd3) => setRwd3(rwd3)} />

            <Pressable style={styles.checkButtonPressable}>
              <Image source={require('../assets/Icons/check.png')} style={styles.buttonSize} />
            </Pressable>
            
          </View> 

          {/* <View style={styles.singleInputLine}>
            <Image source={require('../assets/Icons/add.png')} style={styles.buttonSize} />
          </View> */}
        </View>

        <View style={styles.previewContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titles}> 
              Preview
            </Text>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.cuteRect}>
              <Text style={styles.previewText}> 
                My Donor Rewards {"\n"} {"\n"} 
                Reward 1: {"\t\t"} {rwd1} {"\n"} 
                Reward 2: {"\t\t"} {rwd2} {"\n"} 
                Reward 3: {"\t\t"} {rwd3} {"\n"} 
              </Text>
            </View> 
          </View>
        </View>

        

      </View>
        
      <View style={styles.axnButtonContainer}>
          <Pressable style={styles.axnButton} onPress={() => navigation.navigate(Search)} // Change this to a specific NFP fundraiser page
              style={({ pressed }) => [
              {
                  width: 250,
                  alignItems: 'center',
                  paddingVertical: 12,
                  borderRadius: 100,
                  backgroundColor: pressed
                  ? 'gray'
                  : COLORS.GREEN
              }]}>
                  <Text style={styles.axnButtonText}> CONFIRM </Text> 
          </Pressable>
      </View>
      
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
      backgroundColor: 'white',
    },
    container: {
      backgroundColor: 'white',
      height: '100%',
    },
    blacktext: {
        letterSpacing: 4,
        top: '7%',
        left: '38%',
        color: 'black',
        fontSize: 20,
      },
    input: { // props for TextInput
        backgroundColor: '#F2F2F2',
        // placeholderTextColor: 'black',
        padding: 8,
        borderRadius: 10,
        marginVertical: 8,
        width: '80%',
        height: 35,
        position: 'absolute',
        left: 0,
        bottom: 2,
    },
    previewText: { // text
        fontWeight: 'bold',
        paddingVertical: 10,
        margin: 10,
        fontSize: 22,
    },
    mainContent: { // container view
      // backgroundColor: 'firebrick',
      marginHorizontal: 20,
    },
    previewContainer: {
      // backgroundColor: 'lightblue',
      height: '100%',
    },
    headerContainer: { // view (including text position)
      // backgroundColor: 'gray',
      marginHorizontal: 10,
      marginBottom: 10,
    },
    titles: { // text
      fontWeight: 'bold',
      fontSize: 30,
      paddingTop: 25,
      textAlign: 'center',
      letterSpacing: 4,
    },
    singleInputLine: { // view
        // backgroundColor: 'firebrick',
        height: 55,
        // marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center', // horizontal movement on x axis
        alignContent: 'center',
    },
    buttonSize: { // handle image style of small button
      resizeMode: 'stretch', 
      width:50, 
      height:50,
    },
    checkButtonPressable: { // handle position of check button
      // backgroundColor: 'blue', // just to see where the container is
      position: 'absolute', 
      right: 0, 
      top: 0,
    },
    axnButtonContainer: {//   separate from rest of content
      // backgroundColor: 'lightblue',
      position: 'absolute',
      bottom: 10,
      left: 80,
    },
    axnButtonText: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 35,
    },
    axnButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    cuteRect: {
      backgroundColor:'#F2F2F2',
      margin: 10,
      borderRadius: 5,
      height: '65%'
    },
});