import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

function Main() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Main
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 32,
    color: 'black'
  }
})

export default Main