import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Home
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  text: {
    fontSize: 32,
    color: 'black'
  }
})

export default Home