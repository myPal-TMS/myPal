import React, { useState, useEffect } from 'react';
import Tts from 'react-native-tts'

import { View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{RadioButton, Text } from 'react-native-paper'


const Settings = ({navigation, route}) => {
    const [voice, setVoice] = useState("")
    //console.log(route.params)
    useEffect(() => {
        setVoice(route.params.voice)
    }, [])

    const changeVoice = async(newVoice) => {
        try{
            await AsyncStorage.setItem('defaultVoice', newVoice)
            await Tts.setDefaultVoice(newVoice);
            setVoice(await AsyncStorage.getItem('defaultVoice'));
            Tts.stop()
            Tts.speak("This is a sample voice")
        }
        catch(err){
            console.log("unable to set voice")
        }
    }

    return(
        <RadioButton.Group onValueChange={newVoice => changeVoice(newVoice)} value = {voice}>
            {route.params.availablevoices.map((voice, index) => (
                <View key={index}>
                    <Text>Voice {index}</Text>
                    <RadioButton value = {voice.id}/>
                </View>
            ))}
        </RadioButton.Group>

    )
}

export default Settings;