import React, { useState, useEffect } from 'react';
import Tts from 'react-native-tts'

import { FlatList, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{RadioButton, Text } from 'react-native-paper'
import styles from './styles/sentencePageStyles';


const Settings = ({navigation, route}) => {
    const [voice, setVoice] = useState("")
    useEffect(() => {
       AsyncStorage.getItem('defaultVoice')
       .then((value) => {
           if(value !== null){
               setVoice(value)
           }
           else{
               setVoice(route.params.voice)
           }
       })
        
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

    const renderItem = ({item, index}) => (
        <TouchableOpacity style={styles.sentenceButton} onPress = {() => changeVoice(item.id) }>
                    <Text style={styles.text}>Voice {index + 1}</Text>
                    <RadioButton 
                        value = {item.id}
                        status = {voice === item.id ? 'checked' : 'unchecked' }
                        onPress={() => changeVoice(item.id)}
                    />
        </TouchableOpacity>
    )

    return(
        <View style ={styles.container}>
            
        <FlatList
            keyExtractor= {(item) => item.id}
            data = {route.params.availablevoices}
            renderItem = {renderItem}
            extraData = {voice}
        />

        </View>

    )
}

export default Settings;