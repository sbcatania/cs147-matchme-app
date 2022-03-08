import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import { COLORS } from '../Themes/Constants';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Rewards() {
    
    const [rwd1, setRwd1] = useState('Reward Level 1');
    const [rwd2, setRwd2] = useState('Reward Level 2');
    const [rwd3, setRwd3] = useState('Reward Level 3');
    
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            {/* DONOR RWD CONTENT */}
            <View style={styles.flexboxes}>
                    <Text style={styles.titles}> DONOR REWARDS </Text> 

                    <TextInput 
                    style={styles.input} 
                    placeholder='Reward Level 1' 
                    autoCapitalize='words'
                    onChangeText={(name) => setName(name)} />

                    <TextInput 
                    style={styles.input} 
                    placeholder='Reward Level 2' 
                    autoCapitalize='words'
                    onChangeText={(name) => setName(name)} />

                    <TextInput 
                    style={styles.input} 
                    placeholder='Reward Level 3' 
                    autoCapitalize='words'
                    onChangeText={(name) => setName(name)} />
                </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightblue',
        backgroundColor:'white',
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: '20%',
    },
});

