import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Pressable, Image } from 'react-native';
import Fundraiser from './Donation/Fundraiser'
import Rewards from './RewardsLily'
import Profile from './Profile'
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import { COLORS, IMAGES } from '../Constants';
import { SafeAreaView } from 'react-native-safe-area-context';

/*
* DOCUMENTATION
* Text: https://reactnative.dev/docs/text
* TextInput: https://reactnative.dev/docs/textinput
* FlatList: https://reactnative.dev/docs/flatlist
* Counter: https://www.npmjs.com/package/react-native-numeric-input 
* Useful TextInput: https://blog.logrocket.com/complete-guide-textinput-react-native/ 
* 
* 
* QUESTIONS
* 
* 
* 
* 
* TODO
*   - TAGS (DANA): Hold color and pass data to next screen with state variables.
*   - NAV: Reconnect buttons once scaffolding is set up.
*   - STATE VARS: Setup state vars for text input also.
*   - UI: Finalize CSS styling.
*/

// Main fn
export default function Search() {
    
    // TEXTINPUT: Setup state variables for text and numeric inputs
    const [handle, setHandle] = useState('@worldwildlifefundintl');
    const [name, setName] = useState('World Wildlife Fund');
    const [fundName, setFundname] = useState('Save the Animals Fundraiser');
    const [desc, setDesc] = useState('About my fundraiser');
    const [dongoal, setDongoal] = useState('100,000');
    // const [doncounter, setDonCounter] = useState(0);
    const [usercounter, setUserCounter] = useState(0);

    // NAVIGATION: Setup nav between pages
    const navigation = useNavigation();

    // TAGDATA: Tag list
    const [tags, setTags] = useState ([
        { tag: 'ENVIRO', key: '1' },
        { tag: 'ART', key: '2' },
        { tag: 'HUNGER', key: '3' },
        { tag: 'HUMAN RIGHT', key: '4' },
        { tag: 'EDUC', key: '5' },
        { tag: 'EQUALITY', key: '6' },
        { tag: 'ANIMALS', key: '7' },
        { tag: 'CONSERVE', key: '8' },
    ]);

    // TAGHANDLER: Make touchable components
    const pressHandler = (id) => {
        setTags((prevTags) => {
            /* do whatever action to the tags */
        });
    }

    // Plz show up
    return (
        
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>

            {/* MY FUNDRAISER CONTENT */}

            <View style={styles.headerContainer}>
                <Text style={styles.titles}> My Fundraiser </Text> 
            </View>
            
            <View style={styles.flexboxes}> 
                <TextInput 
                style={styles.input} 
                placeholder='Org Handle' 
                autoCapitalize='none'
                onChangeText={(handle) => setHandle(handle)} />
                {/* left={<TextInput.Icon name='landay'/>}  // get this working for fun */}
                
                <TextInput 
                style={styles.input} 
                placeholder='Org Name' 
                autoCapitalize='words'
                onChangeText={(name) => setName(name)} />

                <TextInput 
                style={styles.input} 
                placeholder='Fundraiser Name' 
                autoCapitalize='words'
                onChangeText={(fundName) => setFundname(fundName)} />

                <TextInput 
                style={styles.input} 
                placeholder='Fundraiser Description' 
                multiline
                onChangeText={(desc) => setDesc(desc)} />

                <TextInput 
                style={styles.input} 
                placeholder='Donation Goal' 
                keyboardType='numeric'
                onChangeText={(dongoal) => setDongoal(dongoal)} />
                <View style={styles.tickercontainer}>
                    <View style={styles.userlilcontainer}>
                        <Image source={IMAGES.USER_ICON} />
                    </View>
                    <View style={styles.tickerlilcontainer}>
                        <NumericInput 
                        style={styles.ticker}
                        type='up-down' 
                        minValue={0}
                        onChange={(usercounter) => setUserCounter(usercounter)} 
                        step={100} 
                        rounded={true}/>
                    </View>
                </View>
            </View>

            {/* TAG CONTENT */}
            <View style={styles.flexboxes}>
                <FlatList 
                numColumns={4}
                data={tags}
                renderItem={({ item }) => (
                    <Pressable 
                    // onPress={() => navigation.navigate(Fundraiser)} // On press, add the text to an array to pass to the next page, and hold color
                    style={({ pressed }) => [
                    {
                        marginTop: 5,
                        marginHorizontal: 2,
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        borderRadius: 100,
                        borderWidth: 2,
                        backgroundColor: pressed
                        ? COLORS.BLUE
                        : 'white',
                        borderColor: pressed
                        ? COLORS.BLUE // HOW TO MAKE THIS UNIQUE FOR EACH TAG?
                        : COLORS.BLACK,
                        
                    }]}>
                        <Text style={styles.tagtext}>{item.tag}</Text>
                    </Pressable>
                )}/>

                {/* Change this setup button to link to rwd page. */}
                {/* <Text   
                    onPress={() => navigation.navigate(Profile)}
                >TOUCH HERE</Text> */}

            </View>

            {/* BUTTON */}
            <View style={styles.flexboxes}>
                <Pressable onPress={() => navigation.navigate(Profile)} // CHANGE TO RWDS SCREEN
                    style={({ pressed }) => [
                    {
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 5,
                        borderRadius: 100,
                        backgroundColor: pressed
                        ? COLORS.BLUE
                        : COLORS.GRAY
                    }]}>
                        <Text style={styles.linktext}> Setup Rewards </Text> 
                </Pressable>

                {/* TESTING VARIABLES */}
                {/* 
                <Text> 
                    Are variables dynamic? {"\n"} 
                    Handle: @{handle} {"\n"} 
                    Org: {name} {"\n"} 
                    Fundraiser Name: {fundName} {"\n"} 
                    Description: {desc} {"\n"} 
                    Donation Goal: {dongoal} {"\n"} 
                    Test: {usercounter}
                </Text> */}
            </View>
        </View>

        <View style={styles.launchcontainer}>
            <Pressable style={styles.launchbutton} onPress={() => navigation.navigate(Fundraiser)} // Change this to a specific NFP fundraiser page
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
                    <Text style={styles.launchbuttontext}> LAUNCH </Text> 
            </Pressable>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightblue',
        backgroundColor:'white',
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingTop: '10%',
    },
    flexboxes: {
        // backgroundColor: 'firebrick',
        paddingHorizontal: 20,
        paddingTop: '5%'
    },
    headerContainer: {
        marginHorizontal: 10,
    },
    titles: { // text
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 25,
        textAlign: 'center',
        letterSpacing: 4,
    },
    input: {
        backgroundColor: '#F2F2F2',
        // placeholderTextColor: 'black',
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
    },
    rewardslink: {
        top: '9%',
        left: '20%',
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: COLORS.BLUE,
    },
    launchcontainer: { //   separate from rest of page hierarchy
        position: 'absolute',
        bottom: 10,
        left: 80,
    },
    tickercontainer: {
        flexDirection: 'row'
    },
    tickerlilcontainer: {
        paddingHorizontal: 10,
        marginTop: 10,
    },
    userlilcontainer: {
        paddingRight: 10,
        marginTop: 15,
    },
    ticker: {
        // ticker properties
    },
    linktext: {
        color: COLORS.BLACK,
        fontSize: 20,
    },
    tagtext: {
        color: COLORS.BLACK,
        fontSize: 12,
        fontWeight: 'bold',
    },
    launchbuttontext: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 35,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});