import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { setI18nConfig } from './utils/I18n'
import { Provider } from 'react-redux'

import Root from './navigation/RootNav'
import store from './utils/redux/Store';

setI18nConfig()

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  </Provider>
)

export default App