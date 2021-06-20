import { theme } from 'galio-framework'
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.77)

export const CardItemLarge = ({ item, index }) => {
  return (
    <View key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.imageLarge}
      />
      {/* <Text style={styles.header}>{item.title}</Text> */}
      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
  )
}

const CardItem = ({ item, index }) => {
  return (
    <View key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      {/* <Text style={styles.header}>{item.title}</Text> */}
      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    borderRadius:5,
    marginBottom:8
  },
  imageLarge: {
    height: 160,
    borderRadius:5,
    marginBottom:8
  }
})

export default CardItem