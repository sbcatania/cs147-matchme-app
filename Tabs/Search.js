import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
// import { COLORS, DATA } from '../Themes/Constants';

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
    
    // TEXTINPUT: Setup state variables
    const [handle, setHandle] = useState('@worldwildlifefundintl');
    const [name, setName] = useState('World Wildlife Fund');
    const [fundName, setFundname] = useState('Save the Animals Fundraiser');
    const [desc, setDesc] = useState('About my fundraiser');
    const [dongoal, setDongoal] = useState('100,000');

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

            <FlatList 
            numColumns={2}
            data={tags}
            renderItem={({ item }) => (
                // <TouchableOpacity onPress={() => pressHandler(item.id)}></TouchableOpacity>
                <Text style={styles.tags}>{item.tag}</Text>
            )}/>
            
            <Text> 
                Are variables dynamic? {"\n"} 
                Handle: @{handle} {"\n"} 
                Org: {name} {"\n"} 
                Fundraiser Name: {fundName} {"\n"} 
                Description: {desc} {"\n"} 
                Donation Goal: {dongoal} {"\n"} 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: '60%',
    },
    tags: {
        marginTop: 5,
        marginHorizontal: 3,
        padding: 8,
        backgroundColor: 'green',
        // COLORS.array.forEach(color => {
        //     return color;
        // }),
        fontSize: 12,
    }
});