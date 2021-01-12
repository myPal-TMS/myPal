import React, { useEffect, useState } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { ADD_SUBCATEGORY } from '../store/constants';
import { _addSubcategory} from "../store/myPal_redux/actions";
import { getSubCategories } from '../store/myPal_redux/thunks';

const SubCategoryPage = ({ navigation, route }) => {
    const dispatch = useDispatch ()
    //const [Food, addFood] = useState(["apple", "banana"])
    const subcategories = useSelector (({subcategories}) => subcategories)
    const [IndFood, setIndFood] = useState("")

    useEffect (()=>{
        dispatch (getSubCategories()) 
    }, [])

      
    const testFood = (newFood) => {
        if (newFood != "") {
            dispatch (_addSubcategory(newFood))
            setIndFood("")
        }

    }

    return (
        <ScrollView>
            {subcategories.map((subcategory) => (
                <TouchableOpacity key={subcategory.id} onPress={() => navigation.navigate("Sentences", { subcategory: subcategory.title })}>
                    <Text>
                        {subcategory.title}
                    </Text>
                </TouchableOpacity>
            ))}
            {/* <Text>
                Test
            </Text> */}
            <TextInput value={IndFood} placeholder="Enter new subcategory" onChangeText={text => setIndFood(text)} />
            <Button title="Submit" onPress={() => { testFood(IndFood) }} />




        </ScrollView>
    )
}
export default SubCategoryPage