import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import Heart from '../../../assets/images/heartSvg.svg'
import * as R from '../../res'

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Home
      </Text>
      <Heart />
      <R.icons.ic_heart />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 32,
    color: 'black'
  }
})

export default Home