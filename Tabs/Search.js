import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';

export default function Search() {
    
    // Setup state variables
    const [handle, setHandle] = useState('@worldwildlifefundintl');
    const [name, setName] = useState('World Wildlife Fund');
    
    
    // Plz show up
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input} 
            placeholder='Organization Handle' 
            onChangeText={(handle) => setHandle(handle)} />
            
            <TextInput 
            style={styles.input} 
            placeholder='Organization Name' 
            onChangeText={(name) => setName(name)} />

            <Text> Are variables dynamic? {"\n"} Handle: {handle}, Name: {name}</Text>
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