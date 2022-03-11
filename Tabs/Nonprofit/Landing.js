import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, IMAGES } from '../../Constants';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SetupFundraiser() {   
    
    // Hacky way to get flatlist of tags to rerender
    const [refresh, setRefresh] = useState(true);
    
    // TAGDATA: Tag list
    const [tags, setTags] = useState ([
        { tag: 'ENVIRO', key: '1', clicked:false, color: COLORS.MAGENTA },
        { tag: 'ART', key: '2',  clicked:false, color: COLORS.BROWN},
        { tag: 'HUNGER', key: '3', clicked:false, color: COLORS.YELLOW },
        { tag: 'HUMAN RIGHT', key: '4', clicked:false, color: COLORS.BLUE},
        { tag: 'EDUC', key: '5',  clicked:false, color: COLORS.ORANGE },
        { tag: 'EQUALITY', key: '6', clicked:false, color: COLORS.LIGHTBLUE },
        { tag: 'ANIMALS', key: '7', clicked:false, color: COLORS.RED },
        { tag: 'CONSERVE', key: '8', clicked:false, color: COLORS.PURPLE },
    ]);

    return (
        <View style={{backgroundColor:'white', position:'absolute', height: '100%', width: '100%'}}>
        <SafeAreaView>
        
            <View style={styles.container}>
            <ScrollView style = {styles.scrollView}>
                <Image source={require('../../assets/Nonprofit/logogreen.png')} style={styles.logoimg}></Image>
                <View style = {styles.row}> 
                    <Image style = {styles.profimg} source = {require('../../assets/Nonprofit/wwf.png')}></Image>
                    <View style = {styles.col}>
                        <Text style = {styles.blacktext}> Pablo O </Text>
                        <Text style = {styles.graytext}> 24 donations   10 matches </Text>
                    </View>
                </View>
                
                <View style={styles.tagBox}>
                    <FlatList 
                    numColumns={4}
                    data={tags}
                    extraData={refresh}
                    renderItem={({ item }) => (
                        <Pressable 
                        onPress={() => {item.clicked = !item.clicked, setRefresh(!refresh)}} //On press, indicate clicked, and force refresh
                        style={styles.tag(item.clicked ? item.color : "white")}>
                            <Text style={styles.tagtext}>{item.tag}</Text>
                        </Pressable>
                    )}/>
                </View>

                <Image style = {{height: 350, width: '100%', resizeMode: 'contain', }} source = {require('../../assets/Nonprofit/impact.png')}></Image>
                {/* <Image style = {{height: 350, width: '100%', resizeMode: 'contain', }} source = {require('../../assets/Nonprofit/impact.png')}></Image> */}
            
            </ScrollView>
            </View>



        </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightblue',
        backgroundColor:'white',
        height: '100%',
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingTop: '10%',
    },
    tagBox: {
        left: 40,
        paddingVertical: 30,
    },
    tag: (color) => { return {
        marginTop: 5,
        marginHorizontal: 2,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 100,
        borderWidth: 2,
        backgroundColor: color,
        borderColor: COLORS.BLACK,
    }},
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
    logoimg: {
        top: '2%',
        left: '5%',
        marginBottom: 20,
    },    
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    profimg: {
        borderRadius: 100,
        height: 80,
        width: 80,
        backgroundColor: 'white',
        left: 20,
        borderColor: 'grey',
        borderWidth: 3,
    },
    impactimg: {
        top: '2%',
        height: 250,
        width: '98%'
    },
    impactinfoimg: {
        top: '8%',
        height: 380,
        width: 380,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderRadius: 50,
    },
    scrollView: {
        // backgroundColor: 'lightblue',
        height: '100%',
    },
    blacktext: {
        // backgroundColor: 'pink',
        textAlign: 'left',
        fontSize: 40,
        left: 40,
        color: COLORS.BLACK,
        fontWeight: 'bold',
    },
    graytext: {
        // backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 20,
        color: 'gray',
        left: 40,
        },
});