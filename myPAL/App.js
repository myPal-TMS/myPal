import 'react-native-gesture-handler';
import React from 'react';
import CategoryPage from './components/CategoryPage';
import SubCategoryPage from './components/SubCategoryPage';
import store from './store/store';
import Sentences from './components/Sentences';
import Settings from './components/Settings';
import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import {Button} from 'react-native';


const Stack = createStackNavigator();

const App = () => {
  const [voice, setVoice] = useState("")
  const [voices, setVoices] = useState([])

  const initialize = async() => {
    try{
      await Tts.getInitStatus()
      //Tts.speak("Welcome to my pal")
    }catch(err){
      if(err.code == 'no_engine'){
        Tts.requestInstallEngine()
      }
    }
    
    const raw_voices = await Tts.voices()
    const availablevoices = raw_voices
      .filter(voice => !voice.networkConnectionRequired && !voice.noInstalled && voice.language === 'en-US')
      .map(voice => {
        return{id: voice.id, name: voice.name, language: voice.language}
      })
    
    const defaultVoice = await AsyncStorage.getItem('defaultVoice')
    if(defaultVoice !==null){
      setVoice(defaultVoice)
      await Tts.setDefaultVoice(defaultVoice)
    }
    else{
      await Tts.setDefaultVoice(availablevoices[0].id)
      AsyncStorage.setItem('defuaultVoice', availablevoices[0].id)
      setVoice(availablevoices[0].id)
    }
    
    
    Tts.speak("Welcome to my pal")
    
    setVoices(availablevoices)
    
    //console.log(voice)
    //console.log(availablevoices)
  }

  const settingsButton = (navigation) => (
    <Button 
      title= "settings" 
      onPress ={() => {
        navigation.set
        navigation.navigate("Settings", {availablevoices: voices, voice: voice})
      }} 
    />
  )

  useEffect(() => {
    initialize()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator screenOptions = {({navigation}) => ({headerRight: ()=>  settingsButton(navigation)}) }>
          <Stack.Screen name = "myPAL" component = {CategoryPage}/>
          <Stack.Screen name = "Subcategory" component = {SubCategoryPage} options={({ route }) => ({ title: route.params.category })}/>
          <Stack.Screen name = "Sentences" component = {Sentences} options = {({ route }) => ({ title: route.params.subcategory })}/>
          <Stack.Screen name = "Settings" component = {Settings} options={{headerRight: () => null}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;