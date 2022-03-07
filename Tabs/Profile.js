import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';



// CURRENTLY USING TO DEVELOP NFP RWDS PAGE

export default function Fundraiser() {
    return(
        <Text style = {styles.blacktext}> Profile </Text>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    blacktext: {
        letterSpacing: 4,
        top: '7%',
        left: '38%',
        color: 'black',
        fontSize: 20,
      },
});