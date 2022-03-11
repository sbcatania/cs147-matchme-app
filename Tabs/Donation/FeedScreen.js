import React, { useRef, } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import PostSingle from '../Donation/PostSingle';
import { Video } from 'expo-av';
import { IMAGES, VIDEOS, DATA, COLORS } from '../../Constants';
import { useNavigation } from '@react-navigation/native';
import Fundraiser from '../Donation/Fundraiser';


export default function FeedScreen({ navigation }) {
    const mediaRefs = useRef([])

    const array = VIDEOS;
    console.log(array);

    const onViewableItemsChanged = useRef(({ changed }) => {
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]
            if (cell) {
                console.log('onViewableItemsChanged', element, element.isViewable)
                if (element.isViewable) {
                    cell.play()
                } else {
                    cell.stop();
                }
            }

        });


    })

    const onViewRef = React.useRef((viewableItems) => {
        console.log(viewableItems)
        // Use viewable items in state or as intended
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 100 })
 
    const renderItem = ({ item, index }) => {
        console.log(index);
        let post = DATA.POSTS[index + 1];
        let handleprint = post.handle;
        let handle = DATA.POSTS[index].handle;
        let caption = post.caption;
        let loadimage = post.image;
        console.log(handle)
        let video = post.video;

        return (
            <View style={[{ flex: 1, height: Dimensions.get('window').height - 79 }, {backgroundColor: 'f0f0f0'}]}>
                <PostSingle video = {video} />
                <View style={styles.sidebar}>
                    <Image source={DATA.PROFILES[handle].avatar} style={styles.profileimg}></Image>
                    <Image source={IMAGES.LIKE_ICON} style={styles.sideicon}>
                    </Image>
                    <Image source={IMAGES.DISLIKE_ICON} style={styles.sideicon}>
                    </Image>
                    <Image source={IMAGES.SHARE_ICON} style={styles.sideicon}>
                    </Image>
                    
                </View>
                <View>
                <Text style = {styles.whitetext}> @{handleprint} </Text>
                </View>
                <View>
                <Text style = {styles.whitetextsmall}>{caption}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Fundraiser", handle)}>
                    <Image style={styles.donateimg} source={IMAGES.DONATE_ICON} />
                </TouchableOpacity>
               
                
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={array}
                windowSize={4}
                initialNumtoRender={0}
                maxToRenderPerBatch={2}
                removeClippedSubviews
                volume ={0}
                viewabilityConfig={viewConfigRef.current}
                renderItem={renderItem}
                pagingEnabled
                keyExtractor={item => item.id}
                decelerationRate={'fast'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        position: "absolute",
        marginTop: "-15%",
        right: 0
    },
    capImgHolder: {
        position: "absolute",
    },
    capImg: {
        marginTop: '-30%',
        marginBottom: 30,
        left: 10,
        width: '70%',
        height: 70,
    },

    whitetext: {
        marginTop: '-20%',
        marginLeft: '5%',
        fontSize: 20,
        color: COLORS.WHITE,
        fontWeight: 'bold',
        textAlign: 'left',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
      },
      whitetextsmall: {
        flexWrap: 'wrap',
        marginTop: '-12%',
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '30%',
        fontSize: 16,
        color: COLORS.WHITE,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
      },
    profileimg: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
        position: 'absolute',
        right: 5,
        bottom: 5,
        borderRadius: 100,
    },
    donateimg: {
        width:88,
        height: 88,
        resizeMode: 'contain',
        position: 'absolute',
        right: 10,
        bottom: -60,
    },
    sidebar: {
        position: "absolute",
        marginTop: "-65%",
        right: 20,
    },
    sideicon: {
        width: 35,
        height: 45,
        marginTop: 10,
        right: 15,
        resizeMode: 'contain',
    }
});