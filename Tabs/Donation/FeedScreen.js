import React, { useRef,  } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import PostSingle from '../Donation/PostSingle';
import { Video } from 'expo-av';


export default function FeedScreen() {
    const mediaRefs = useRef([])

    const array = ['http://web.stanford.edu/class/cs147/projects/TheFutureOfPhilanthropy/MATCH.ME/files/matchme-video.mp4', 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    'http://web.stanford.edu/class/cs147/projects/TheFutureOfPhilanthropy/MATCH.ME/files/matchme-video.mp4', 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4']

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
              <PostSingle item = {item} ref= {PostSingleRef => (mediaRefs.current[item] = PostSingleRef)} />
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
});