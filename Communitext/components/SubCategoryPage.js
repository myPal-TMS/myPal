import React, { useEffect, useState } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { ADD_SUBCATEGORY } from '../store/constants';
import { _addSubcategory} from "../store/myPal_redux/actions";
import { getSubCategories } from '../store/myPal_redux/thunks';

const SubCategoryPage = ({ navigation, route }) => {
    const dispatch = useDispatch ()
    const subcategories = useSelector (({subcategories}) => subcategories)
    const [Subcategory, setSubcategory] = useState("")

    useEffect (()=>{
        dispatch (getSubCategories())
    }, [])

    const addSubcategory = (newSubcategory) => {
        if (newSubcategory != "") {
            dispatch (_addSubcategory(newSubcategory))
            setSubcategory("")
        }

    }
    return (
        <ScrollView>
            {subcategories.map((subcategory) => (

                <TouchableOpacity
                    key={subcategory.SubCategoryID}
                  cons
                    onPress={() =>
                        navigation.navigate("Sentences", { subcategory: subcategory.subName })}>
                    <Text>
                        {subcategory.subName}
                    </Text>
                </TouchableOpacity>
            ))}
            {/* <Text>
                Test
            </Text> */}
            <TextInput value={Subcategory}
                       placeholder="Enter new subcategory"
                       onChangeText={(text) => setSubcategory(text)} />

            <Button
                title="Submit"
                onPress={() => {
                    addSubcategory(Subcategory)
                    setSubcategory("")
                }} />




        </ScrollView>
    )
    // console.log(subcategories)
}
export default SubCategoryPage