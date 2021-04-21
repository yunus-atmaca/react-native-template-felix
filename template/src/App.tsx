import React from 'react'
import Root from './navigation/RootNav'
import { setI18nConfig } from './utils/I18n'

setI18nConfig()

const App = () => (<Root />)

export default App