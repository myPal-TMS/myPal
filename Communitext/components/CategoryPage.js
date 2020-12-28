import React,{useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Button
} from 'react-native';


const CategoryPage = () => {
    const [categories, setCategories] = useState(["category1", "category2", "category3", "category4", "category5", "category6"]);
    const [Category, setCategory] = useState("");

    const addCategory = (newCategory) => {
        if(newCategory != "")
        {
            setCategories(oldState => [...oldState, newCategory]);
        }
    }

    return(
        <ScrollView>
            {categories.map((category,index) => (
                <TouchableOpacity
                    key = {index}
                    onPress={() => alert(category)}>
                    <Image source = {require('../assets/images/smiley.jpg')}/>
                    <Text>
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}

            <TextInput 
            value = {Category} 
            placeholder = "Enter new category" 
            onChangeText = {text => setCategory(text)} 
            />

            <Button 
            title = "Submit" 
            onPress = { () => {
                    addCategory(Category);
                    setCategory("")
                }}
            />
        </ScrollView>
    )
  }

export default CategoryPage;