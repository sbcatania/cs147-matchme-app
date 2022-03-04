import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonationEntry from './DonationEntry';
import DonationConfirmation from './DonationConfirmation';
import DonationThankYou from './DonationThankYou';

export default function Fundraiser() {
    const navigation = useNavigation();
    return(
        <Text style = {styles.blacktext}> Fundraiser Screen </Text>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    blacktext: {
        letterSpacing: 4,
        top: '7%',
        left: '20%',
        color: 'black',
        fontSize: 20,
      },
});