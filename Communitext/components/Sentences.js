import React, { useState, useEffect } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { _addSentence } from "../store/myPal_redux/actions";
import { getSentences, addSentence } from '../store/myPal_redux/thunks';

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
        <ScrollView>
            {sentences.map((sentence) => (
                <TouchableOpacity key={sentence.SentenceID} onPress={() => alert(route.params.subcatID)}>
                    <Text>
                        {sentence.sentence}
                    </Text>
                </TouchableOpacity>
            ))}
           
            <TextInput value={IndSentence} placeholder="Enter new sentence" onChangeText={text => setIndSentence(text)} />
            <Button title="Submit" onPress={() => { testSentence(IndSentence) }} />




        </ScrollView>
    )
}
export default Sentences ;