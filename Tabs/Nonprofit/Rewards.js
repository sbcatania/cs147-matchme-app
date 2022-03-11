import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { COLORS, IMAGES } from '../../Constants';
import Search from '../Search';
import reactDom from "react-dom";
// import * as ImagePicker from 'expo-image-picker';

// CURRENTLY USING TO DEVELOP NFP RWDS PAGE
/* 
* TODO:
*/

export default function Rewards() {
  
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
      <View style={{backgroundColor:'white'}}>
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
              <Image source={require('../../assets/Icons/check.png')} style={styles.buttonSize} />
            </Pressable>
          </View> 

          <View style={styles.singleInputLine}> 
            
            <TextInput 
            style={styles.input} 
            placeholder='Reward Level 2' 
            autoCapitalize='words'
            onChangeText={(rwd2) => setRwd2(rwd2)} />

            <Pressable style={styles.checkButtonPressable}>
              <Image source={require('../../assets/Icons/check.png')} style={styles.buttonSize} />
            </Pressable>
            
          </View> 

          <View style={styles.singleInputLine}> 
            
            <TextInput 
            style={styles.input} 
            placeholder='Reward Level 3' 
            autoCapitalize='words'
            onChangeText={(rwd3) => setRwd3(rwd3)} />

            <Pressable style={styles.checkButtonPressable}>
              <Image source={require('../../assets/Icons/check.png')} style={styles.buttonSize} />
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
                My Donor Rewards
              </Text>
              <View style={styles.twoCols}>
                <View style={styles.trackerBarCol}>
                  <Image source={IMAGES.REWARD_BAR} style={styles.rewardBarImg}/>
                </View>
                <View style={styles.rewardsNameCol}>
                  <View style={styles.previewRewardTextWrapper}>
                    <Text style={styles.previewRewardTextTitle}>Gold:</Text>
                  </View>
                  <View style={styles.previewRewardTextWrapper}>
                    <Text style={styles.previewRewardTextTitle}>Silver:</Text>
                  </View>
                  <View style={styles.previewRewardTextWrapper}>
                    <Text style={styles.previewRewardTextTitle}>Bronze:</Text>
                  </View>
                </View>
                <View style={styles.rewardsValueCol}>
                  <View style={styles.previewRewardTextWrapper}>
                    <Text style={styles.previewRewardText}>{rwd1}</Text>
                  </View>
                  <View style={styles.previewRewardTextWrapper}>
                    <Text style={styles.previewRewardText}>{rwd2}</Text>
                  </View>
                  <View style={styles.previewRewardTextWrapper}>
                    <Text style={styles.previewRewardText}>{rwd3}</Text>
                  </View>
                </View>
              </View>
            </View> 
          </View>
        </View>

        

      </View>
        
      <View style={styles.axnButtonContainer}>
          <Pressable onPress={() => navigation.navigate('SetupFundraiser')} // Change this to a specific NFP fundraiser page
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
      </View>
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
        paddingTop: 10,
        marginHorizontal: 15,
        marginTop: 10,
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
      backgroundColor:'#F5F1E5',
      margin: 1,
      borderRadius: 5,
      height: '63%'
    },
    twoCols: {
      display: 'flex',
      flexDirection: 'row',
    },
    rewardsNameCol: {
      // backgroundColor: "blue",
      paddingLeft: 10,
      paddingRight: 20,
      paddingBottom: 10,
      paddingTop: 10,
      justifyContent: 'space-evenly',
    },
    rewardsValueCol: {
      // backgroundColor: "red",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      flexShrink: 0,
      paddingBottom: 10,
      paddingTop: 10,
      width: '50%',
    },
    trackerBarCol: {
      padding: 10,
    },
    rewardBarImg: {
      marginHorizontal: 10,
      width: 50,
      height: 200,
      resizeMode: 'contain',
    },
    previewRewardTextWrapper: {
      // backgroundColor: 'purple',
      display: 'flex',
      height: 60,
      justifyContent: 'center',
    },
    previewRewardTextTitle: {
      // backgroundColor: "orange",
      fontSize: 16,
      fontWeight: 'bold',
      flexShrink: 0,
      width: '100%',
    },
    previewRewardText: {
      // backgroundColor: "orange",
      fontSize: 16,
      letterSpacing: 1.1,
      flexShrink: 0,
      width: '88%',
    },
});