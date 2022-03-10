import React, { useRef,  } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
import PostSingle from '../Donation/PostSingle';
import { Video } from 'expo-av';
import { IMAGES, VIDEOS } from '../../Constants';


export default function FeedScreen({navigation}) {
    const mediaRefs = useRef([])

    const array = VIDEOS;

    const onViewableItemsChanged = useRef(({changed}) => {
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]
            if (cell) {
                console.log('onViewableItemsChanged', element, element.isViewable)
                if(element.isViewable){
                    cell.play()
                } else {
                    cell.stop();
                }
            }

        });


    })

    const onViewRef = React.useRef((viewableItems)=> {
        console.log(viewableItems)
        // Use viewable items in state or as intended
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 100 })

    const renderItem = ({item, index}) => {
        // item refers to the array that we established above which is an array of numbers 1-6
        return (
            <View style = {[{flex : 1, height: Dimensions.get('window').height - 79}, index % 2 == 0 ? {backgroundColor: 'blue'} : {backgroundColor: 'pink'}]}>
              <PostSingle item = {item} />
              
            </View>
        )
    }
    return (
        <View style = {styles.container}>
            <FlatList
                data = {array}
                windowSize ={4}
                initialNumtoRender ={0}
                maxToRenderPerBatch={2}
                removeClippedSubviews
                viewabilityConfig={viewConfigRef.current}
                renderItem ={renderItem}
                pagingEnabled
                keyExtractor = {item => item.id}
                decelerationRate = {'fast'}   
                onViewableItemsChanged={onViewableItemsChanged.current}         
            />


        </View>
            
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    donateimg: {
        width: 80,
        height: 80,

    }, 
    
});