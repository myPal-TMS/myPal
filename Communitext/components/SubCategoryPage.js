import React, { useEffect, useState } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { ADD_SUBCATEGORY } from '../store/constants';
import { _addSubcategory} from "../store/myPal_redux/actions";
import { getSubCategories } from '../store/myPal_redux/thunks';
import styles from './styles/subCategoryPageStyles';

const SubCategoryPage = ({ navigation, route }) => {
    const dispatch = useDispatch ()
    const subcategories = useSelector (({subcategories}) => subcategories)
    const [Subcategory, setSubcategory] = useState("")

    useEffect (()=>{
        
        dispatch (getSubCategories( route.params.categoryID ))
    }, [])

    //console.log(subcategories);

    const addSubcategory = (newSubcategory) => {
        if (newSubcategory != "") {
            dispatch (_addSubcategory(newSubcategory))
            setSubcategory("")
        }

    }
    return (
        <ScrollView
        style = {styles.container}>

            <View
            style = {styles.gallery}>
            {subcategories.map((subcategory) => (

                <TouchableOpacity 
                key={subcategory.SubCategoryID}
                onPress={() =>   navigation.navigate("Sentences", { subcatID: subcategory.SubCategoryID })}
                style = {styles.button}>

                    <Image source = {require("../assets/Images/Categories/Actions/1.png")}
		            style = {styles.picture} />

                        <Text
                        style = {styles.text}>
                            {subcategory.subName}
                        </Text>

                    </TouchableOpacity>
                ))}
            </View>


        {/*   <TextInput value={Subcategory}
                       placeholder="Enter new subcategory"
                       onChangeText={(text) => setSubcategory(text)} />
*/}
          {/*  <Button
                title="Submit"
                onPress={() => {
                    addSubcategory(Subcategory)
                    setSubcategory("")
                }} />*/}




        </ScrollView>
    )
    // console.log(subcategories)
}
export default SubCategoryPage