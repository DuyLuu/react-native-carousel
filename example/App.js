/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Carousel from '@r0b0t3d/react-native-carousel';

const data = [{
  id: 'image1',
  source: { uri: 'https://ae01.alicdn.com/kf/HTB10xLEPFXXXXbRaXXXq6xXFXXXm/danbo-10-pcs-set-Danbo-Mini-Danbor-High-Quality-children-Gift-Toy-Cat-backyard-Anime-In.jpg_640x640.jpg' },
  url: 'https://ae01.alicdn.com/kf/HTB10xLEPFXXXXbRaXXXq6xXFXXXm/danbo-10-pcs-set-Danbo-Mini-Danbor-High-Quality-children-Gift-Toy-Cat-backyard-Anime-In.jpg_640x640.jpg',
}, {
  id: 'image2',
  source: { uri: 'https://live.staticflickr.com/5324/31332023695_1e3135f8d0_b.jpg' },
  url: 'https://live.staticflickr.com/5324/31332023695_1e3135f8d0_b.jpg',
}, {
  id: 'image3',
  source: { uri: 'https://4.bp.blogspot.com/_N44PgSKJwQY/TOtoPtIo3_I/AAAAAAAAANE/7WwIFzgm-IU/s1600/Danboard.obstacles.jpg'},
  url: 'https://4.bp.blogspot.com/_N44PgSKJwQY/TOtoPtIo3_I/AAAAAAAAANE/7WwIFzgm-IU/s1600/Danboard.obstacles.jpg',
}, {
  id: 'image5',
  source: { uri: 'https://i.pinimg.com/originals/97/17/8a/97178ac9a3e25b3080a0e7f8b728ac29.jpg' },
  url: 'https://i.pinimg.com/originals/97/17/8a/97178ac9a3e25b3080a0e7f8b728ac29.jpg',
}, {
  id: 'image6',
  source: { uri: 'https://c4.wallpaperflare.com/wallpaper/289/627/693/danbo-cardboard-robot-hat-walk-wallpaper-preview.jpg' },
  url: 'https://c4.wallpaperflare.com/wallpaper/289/627/693/danbo-cardboard-robot-hat-walk-wallpaper-preview.jpg',
}];

export default function App() {

    return (
      <View style={styles.container}>
        <Carousel
          style={{ height: 200 }}
          data={data}
          loop
          autoPlay
          duration={3000}
          renderImage={(item) => {
            return <Image
              style={{
                flex: 1,
                backgroundColor: 'red',
              }}
              source={{ uri: item.url }}
            />
          }}
        />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
