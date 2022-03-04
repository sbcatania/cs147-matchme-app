import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";

export default function DonationThankYou() {
    return(
        <Text style = {styles.blacktext}> Donation Thank You </Text>
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