import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Pressable } from 'react-native';
import { COLORS, DATA } from '../Themes/Constants';
// import Explore from './Explore';
import Fundraiser from './Donation/Fundraiser'
// import Inbox from './MatchRequest/Inbox';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'

/*
* Documentation
* Text: https://reactnative.dev/docs/text
* TextInput: https://reactnative.dev/docs/textinput
* FlatList: https://reactnative.dev/docs/flatlist
* 
* 
* 
* 
* QUESTIONS
* 1. I don't know anything about rendering order ... do I put different things in
* different functions? Right now they're all in Search(), and all in the parent <View> tag.
* 
* 
* 
* TODO
*   - WHAT TO USE FOR TAG SELECTION?
*   - WHAT TO USE FOR 
*   - MELANIE: Can you help me set up a stack navigator for fundraiser setup flow?
*   - MOVE INPUT: text input for handle, OrgName should be in onboarding, not here
*   - MOVE TO NFP FLOW: obviously, move this out of search.
*/

// Main fn
export default function Search() {
    
    // TEXTINPUT: Setup state variables for text and numeric inputs
    const [handle, setHandle] = useState('@worldwildlifefundintl');
    const [name, setName] = useState('World Wildlife Fund');
    const [fundName, setFundname] = useState('Save the Animals Fundraiser');
    const [desc, setDesc] = useState('About my fundraiser');
    const [dongoal, setDongoal] = useState('100,000');
    const [doncounter, setDonCounter] = useState(0);
    const [usercounter, setUserCounter] = useState(0);

    // NAVIGATION: Setup nav between pages
    const navigation = useNavigation();

    // TICKER COUNTERS: Setup counter boxes

    // TAGDATA: Tag list
    const [tags, setTags] = useState ([
        { tag: 'ENVIRO', key: '1' },
        { tag: 'ARTS', key: '2' },
        { tag: 'HUNGER', key: '3' },
        { tag: 'HUMAN RTS', key: '4' },
        { tag: 'EDUCATION', key: '5' },
        { tag: 'EQUALITY', key: '6' },
        { tag: 'ANIMALS', key: '7' },
        { tag: 'CONSERVATION', key: '8' },
    ]);

    // TAGHANDLER: Make touchable components
    const pressHandler = (id) => {
        setTags((prevTags) => {
            /* do whatever action to the tags */
        });
    }

    // Plz show up
    return (
        <View style={styles.container}>

            <Text style={styles.titles}> MY FUNDRAISER </Text> 

            <TextInput 
            style={styles.input} 
            placeholder='Org Handle' 
            autoCapitalize='none'
            onChangeText={(handle) => setHandle(handle)} />
            
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

            <NumericInput 
            type='up-down' 
            onChange={(usercounter) => setUserCounter(usercounter)} 
            step={100} 
            rounded={true}/>

            <NumericInput 
            type='up-down' 
            onChange={(donounter) => setDonCounter(doncounter)} 
            step={100} 
            rounded={true}/>

            <FlatList 
            numColumns={2}
            data={tags}
            renderItem={({ item }) => (
                // <TouchableOpacity onPress={() => pressHandler(item.id)}></TouchableOpacity>
                <Pressable style={styles.tags} onPress={() => navigation.navigate(Fundraiser)} // Change this to just hold its pressed color
                style={({ pressed }) => [
                {
                    width: 120,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                    paddingVertical: 8,
                    borderRadius: 100,
                    elevation: 3,
                    backgroundColor: pressed
                    ? 'gray'
                    : COLORS.BLUE
                }, 
                styles.wrapperCustom
                ]}>
                    <Text>{item.tag}</Text>
                </Pressable>
            )}/>
    

            {/* Testing!
            <Text> 
                Are variables dynamic? {"\n"} 
                Handle: @{handle} {"\n"} 
                Org: {name} {"\n"} 
                Fundraiser Name: {fundName} {"\n"} 
                Description: {desc} {"\n"} 
                Donation Goal: {dongoal} {"\n"} 
                Test: {usercounter}
            </Text> */}
            
            <Pressable style={styles.launchbutton} onPress={() => navigation.navigate(Fundraiser)} // Change this to a specific NFP fundraiser page
                style={({ pressed }) => [
                {
                    width: 250,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    borderRadius: 100,
                    elevation: 3,
                    backgroundColor: pressed
                    ? 'gray'
                    : COLORS.GREEN
                }, 
                styles.wrapperCustom
                ]}>
                    <Text style={styles.buttontext}> LAUNCH </Text> 
            </Pressable>
            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20%',
    },
    titles: {
        // textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 25,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: '60%',
    },
    // tags: {
    //     marginTop: 5,
    //     marginHorizontal: 3,
    //     padding: 8,
    //     backgroundColor: 'green',
    //     borderRadius: 10,
    //     // COLORS.array.forEach(color => {
    //     //     return color;
    //     // }),
    //     fontSize: 12,
    // },
    launchbutton: {
        top: '9%',
        left: '20%',
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: COLORS.GREEN,
      },
      buttontext: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 35,
      },
});