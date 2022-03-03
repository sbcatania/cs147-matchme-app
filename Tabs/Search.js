import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';

/*
* TextInput documentation: https://reactnative.dev/docs/textinput
* TODO: 
*   - MOVE INPUT: text input for handle, OrgName should be in onboarding, not here
*/

// Main fn
export default function Search() {
    
    // Setup state variables
    const [handle, setHandle] = useState('@worldwildlifefundintl');
    const [name, setName] = useState('World Wildlife Fund');
    const [fundName, setFundname] = useState('Save the Animals Fundraiser');
    const [desc, setDesc] = useState('About my fundraiser');
    const [dongoal, setDongoal] = useState('100,000');
    
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
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});