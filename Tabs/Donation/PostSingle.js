import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Video } from 'expo-av';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useEffect } from 'react';

export const PostSingle = forwardRef((item, parentRef) => {
    console.log(item.item);

    const ref = useRef(null);
    useImperativeHandle(parentRef, () => ({
        play,
        unload,
        stop
    }))

    useEffect(() => {
        return () => {
            unload();
        }
    }, [])
    const play = async() => {
        if(ref.current == null) {
            return;
        }
        const status = await ref.current.getStatusAsync();
        if (status?.isPlaying) {
            return;
        }
        try {
            await ref.current.playAsync();
        } catch(e) {
            console.log(e)
        }  
    }

    const stop = async() => {
        if(ref.current == null) {
            return;
        }
        const status = await ref.current.getStatusAsync();
        if (!status?.isPlaying) {
            return;
        }
        try {
            await ref.current.stopAsync();
        } catch(e) {
            console.log(e)
        }  
    }

    const unload = async() => {
        if(ref.current == null) {
            return;
        }
        const status = await ref.current.getStatusAsync();
        if (!status?.isPlaying) {
            return;
        }
        try {
            await ref.current.unloadAsync();
        } catch(e) {
            console.log(e)
        }  
    }
    
    return (      
    <Video 
        ref={ref}
        style={styles.container}
        resizeMode = {Video.RESIZE_MODE_COVER}
        shouldPlay= {true}
        isLooping
        source = {{uri: item.item}}
  />
  
       
    )
})

export default PostSingle

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});