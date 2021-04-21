import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

function Profile() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Profile
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  text: {
    fontSize: 32,
    color: 'black'
  }
})

export default Profile