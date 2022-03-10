import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
// importing the dependency didn't work in the snack so I just copied the file and accessed it manually
import InViewPort from './InViewPort';

export default class PostSingle extends React.Component {

  pauseVideo = () => {
    if(this.video) {
      this.video.pauseAsync();
    }
  }

  playVideo = () => {
    if(this.video) {
      this.video.playAsync();
    }
  }

  handlePlaying = (isVisible) => {
    isVisible ? this.playVideo() : this.pauseVideo();
  }
  
  render() {
      return (
        <View style={styles.container}>
         <InViewPort onChange={this.handlePlaying}>
          <Video
          ref={ref => {this.video = ref}}
          style={{
              height: "100%",
              width: "100%"
             }}

             shouldPlay= {true}
             isLooping
             resizeMode= 'cover'
            source = {{uri: this.props.video}}
            volume = {0.5}
          />
          </InViewPort>
        </View>
      )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});





// import React, { useRef } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { Video } from 'expo-av';
// import { forwardRef } from 'react';
// import { useImperativeHandle } from 'react';
// import { useEffect } from 'react';
// import InViewPort from './InViewPort';

// export default class PostSingle extends
// React.Component {
//     pauseVideo = () => {
//         if(this.video) {
//           this.video.pauseAsync();
//         }
//       }
    
//       playVideo = () => {
//         if(this.video) {
//           this.video.playAsync();
//         }
//       }

//       handlePlaying = (isVisible) => {
//         isVisible ? this.playVideo() : this.pauseVideo();
//         console.log(isVisible)
//       }
     

//       render() {
//           return(
//             <View style = {styles.container}>
//             <InViewPort onChange={this.handlePlaying}>  
//                <Video 
//                         ref={ref => {this.video = ref}}
//                         resizeMode = {Video.RESIZE_MODE_COVER}
//                         shouldPlay= {true}
//                         isLooping
//                         source = {{uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4' }}
//                         volume = {0.5}
//                 />
//                 </InViewPort> 
//                 </View>   
//           )
//       }

// }

// // export const PostSingle = forwardRef((item, parentRef) => {
// //     console.log(item.item);

// //     pauseVideo = () => {
// //         if(this.video) {
// //           this.video.pauseAsync();
// //         }
// //       }
    
// //       playVideo = () => {
// //         if(this.video) {
// //           this.video.playAsync();
// //         }
// //       }

//     // const ref = useRef(null);
//     // useImperativeHandle(parentRef, () => ({
//     //     play,
//     //     unload,
//     //     pause
//     // }))

//     // useEffect(() => {
//     //     return () => {
//     //         unload();
//     //     }
//     // }, [])
//     // const play = async() => {
//     //     if(ref.current == null) {
//     //         return;
//     //     }
//     //     const status = await ref.current.getStatusAsync();
//     //     if (status?.isPlaying) {
//     //         return;
//     //     }
//     //     try {
//     //         await ref.current.playAsync();
//     //     } catch(e) {
//     //         console.log(e)
//     //     }  
//     // }

//     // const pause = async() => {
//     //     if(ref.current == null) {
//     //         return;
//     //     }
//     //     const status = await ref.current.getStatusAsync();
//     //     if (!status?.isPlaying) {
//     //         return;
//     //     }
//     //     try {
//     //         await ref.current.pauseAsync();
//     //     } catch(e) {
//     //         console.log(e)
//     //     }  
//     // }

//     // const unload = async() => {
//     //     if(ref.current == null) {
//     //         return;
//     //     }
//     //     const status = await ref.current.getStatusAsync();
//     //     if (!status?.isPlaying) {
//     //         return;
//     //     }
//     //     try {
//     //         await ref.current.unloadAsync();
//     //     } catch(e) {
//     //         console.log(e)
//     //     }  
//     // }

// //     handlePlaying = (isVisible) => {
// //         isVisible ? this.playVideo() : this.pauseVideo();
// //     }
    
// //     return (  
// //         <InViewPort onChange={this.handlePlaying}>  
// //         <Video 
// //            // ref={ref}
// //             style={styles.container}
// //             resizeMode = {Video.RESIZE_MODE_COVER}
// //             shouldPlay= {true}
// //             isLooping
// //             source = {{uri: item.item}}
// //             volume = {0.5}

// //     />
// //     </InViewPort>  
  
       
// //     )
// // })

// //export default PostSingle

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     },
// });