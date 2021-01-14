import React, { useState } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { _addSentence } from "../store/myPal_redux/actions";
import styles from './styles/sentencePageStyles';

const Sentences = ({navigation, route}) => {
        const dispatch = useDispatch ()
    const sentences = useSelector (({sentences}) => sentences)
    const [IndSentence, setIndSentence] = useState("")
    const testSentence = (newSentence) => {
        if (newSentence != "") {
            dispatch (_addSentence(newSentence))
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
                key={sentence.id} onPress={() => alert(route.params.subcategory)}>
                    <Text
                    style = {styles.text}>
                        {sentence.sentence}
                    </Text>
                </TouchableOpacity>
            ))}
            {/* <Text>
                Test
            </Text> */}
            <TextInput 
            style = {styles.submitText}
            value={IndSentence} placeholder="Enter new sentence" onChangeText={text => setIndSentence(text)} />
            <TouchableOpacity 
            style = {styles.submitButton} 
            onPress={() => { testSentence(IndSentence) }} 
            
            >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
            </View>


        </ScrollView>
    )
}
export default Sentences ;