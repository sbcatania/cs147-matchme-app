import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Search() {
    return (
        <View style={styles.container}>
            <Text> Testing. Hello world.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});