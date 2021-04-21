import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import MainNav from '../../navigation/MainNav'

function Main() {

  return (
    <SafeAreaView style={styles.container}>
      <MainNav />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Main