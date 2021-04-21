import React, {
  useEffect
} from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Splash({ navigation }) {

  useEffect(() => {
    setTimeout(_navigateMain, 1500)
  })

  const _navigateMain = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Main', params: {} }
        ],
      })
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Splash
      </Text>
    </SafeAreaView>
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

export default Splash