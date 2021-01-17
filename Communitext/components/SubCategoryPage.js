import React, { useEffect, useState } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { ADD_SUBCATEGORY } from '../store/constants';
import { _addSubcategory} from "../store/myPal_redux/actions";
import { getSubCategories } from '../store/myPal_redux/thunks';
import styles from './styles/subCategoryPageStyles';

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
        <ScrollView
        style = {styles.container}>

            <View
            style = {styles.gallery}>
            {subcategories.map((subcategory) => (

                <TouchableOpacity 
                key={subcategory.id} 
                onPress={() => navigation.navigate("Sentences", { subcategory: subcategory.title })}
                style = {styles.button}>

                    <Image source = {require("../assets/Images/Categories/Actions/1.png")}
		            style = {styles.picture} />

                        <Text
                        style = {styles.text}>
                            {subcategory.title}
                        </Text>

                    </TouchableOpacity>
                ))}
                </View>
            {/* <Text>
                Test
            </Text> */}





        </ScrollView>
    )
}
export default SubCategoryPage