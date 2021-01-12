import React, { useState } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { _addSentence } from "../store/myPal_redux/actions";

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
        <ScrollView>
            {sentences.map((sentence) => (
                <TouchableOpacity key={sentence.id} onPress={() => alert(route.params.subcategory)}>
                    <Text>
                        {sentence.sentence}
                    </Text>
                </TouchableOpacity>
            ))}
            {/* <Text>
                Test
            </Text> */}
            <TextInput value={IndSentence} placeholder="Enter new sentence" onChangeText={text => setIndSentence(text)} />
            <Button title="Submit" onPress={() => { testSentence(IndSentence) }} />




        </ScrollView>
    )
}
export default Sentences ;