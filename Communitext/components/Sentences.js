import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { ScrollView, Button, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { _addSentence } from "../store/myPal_redux/actions";
import {getSentences} from "../store/myPal_redux/thunks"

const Sentences = ({navigation, route}) => {
    const dispatch = useDispatch ()
    const sentences = useSelector (({sentences}) => sentences);
    const [IndSentence, setIndSentence] = useState("");

    useEffect( () => {
        dispatch(getSentences())
    }, [])

    console.log(sentences)

    const testSentence = (newSentence) => {
        if (newSentence != "") {
            dispatch (_addSentence(newSentence))
            setIndSentence("")
        }

    }
    
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => alert(route.params.subcategory)}>
            <Text>
                {item.title}
            </Text>
        </TouchableOpacity>
    );


    return (
        <View>
            <FlatList data = {sentences} renderItem = {renderItem} keyExtractor = {item => item.id.toString()}/>
            
            <TextInput value={IndSentence} placeholder="Enter new sentence" onChangeText={text => setIndSentence(text)} />
            <Button title="Submit" onPress={() => { testSentence(IndSentence) }} />

        </View>
    )
}
export default Sentences ;