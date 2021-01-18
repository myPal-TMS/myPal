import React, { useState, useEffect } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { _addSentence } from "../store/myPal_redux/actions";
import { getSentences, addSentence } from '../store/myPal_redux/thunks';
import styles from './styles/sentencePageStyles';

const Sentences = ({navigation, route}) => {
    const dispatch = useDispatch ()
    const sentences = useSelector (({sentences}) => sentences)
    const [IndSentence, setIndSentence] = useState("")
    
    useEffect (()=>{
        dispatch (getSentences( route.params.subcatID ))
    }, [])

    const testSentence = (newSentence) => {
        if (newSentence != "") {
            dispatch (addSentence( route.params.subcatID, newSentence))
            setIndSentence("")
        }

    }
    return (
        <ScrollView
        style = {styles.container}>
            <View
            styles = {styles.gallery}>
            {sentences.map((sentence) => (
                  <TouchableOpacity
                style = {styles.sentenceButton}
                key={sentence.SentenceID} onPress={() => alert(route.params.subcatID)}>
                    <Text
                    style = {styles.text}>
                        {sentence.sentence}
                    </Text>
                </TouchableOpacity>
            ))}
          <TextInput
            style = {styles.newSentenceText}
            value={IndSentence} placeholder="Enter new sentence" onChangeText={text => setIndSentence(text)} />
            <TouchableOpacity 
            style = {styles.submitButton} 
            onPress={() => { testSentence(IndSentence) }} 
            
            >
                <Text
                style = {styles.submitButtonText}>
                    submit
                </Text>
            </TouchableOpacity>
            </View>


        </ScrollView>
    )
}
export default Sentences ;