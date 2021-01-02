import React, {useState} from 'react';
import {ScrollView, Button, Text, TouchableOpacity, View, TextInput} from 'react-native';

const SubCategoryPage = () => {
    const [Food, addFood] = useState (["apple", "banana"])
    const [IndFood, setIndFood] = useState ("")
    const testFood = (food) => {
        if(food != ""){
            addFood(oldState => [...oldState, food])
            setIndFood("")
        }
        
    }
    return (
        <View>
            {Food.map((element, index)=>(
                <TouchableOpacity key = {index} onPress = {() => alert(element)}>
                    <Text>
                        {element}
                    </Text>
                </TouchableOpacity>
            ))}
            <Text>
                Test
            </Text>
            <TextInput value = {IndFood} placeholder = "Enter new subcategory" onChangeText = {text => setIndFood(text)}/>
            <Button title = "Submit" onPress = {() => {testFood(IndFood)}} />

            
                

        </View>
    )
}
export default SubCategoryPage