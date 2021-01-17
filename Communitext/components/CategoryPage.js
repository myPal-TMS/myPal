import React, { useState, useEffect } from "react";
import {Table, TableWrapper, Row, Column, Rows} from "react-native-table-component";
import styles from './styles/categoryPageStyles';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  Button,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { _addCategory } from "../store/myPal_redux/actions";
import { getCategories } from "../store/myPal_redux/thunks";

const CategoryPage = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const categories = useSelector(({categories}) => categories);
  const [Category, setCategory] = useState("");
  
  useEffect(() => {
    dispatch(getCategories())
      // console.log(categories)
  }, [])
  
  const addCategory = (newCategory) => {
    if (newCategory != "") {
      dispatch(_addCategory(newCategory));
    }
  };
 // console.log(categories)
  const renderItem = ({item}) => (

    <TouchableOpacity 
    style = {styles.button}
    onPress={() =>
         {  console.log(item.catName)
            navigation.navigate("Subcategory", { categoryID: item.CategoryID })}
    }>
      
      <Image style = {styles.picture} source={require("../assets/Images/Categories/Actions/Actions.png")} />
        <Text
        style = {styles.text}>
            {item.catName}
        </Text>
        
    </TouchableOpacity>
);

  return (
    <View
    style = {styles.container}>

      <View
      style = {styles.gallery}>
        <FlatList 
        
        key = {'#'} 
        data = {categories} 
        renderItem = {renderItem} 
        keyExtractor = { (item, index) => '#' + item.CategoryID.toString()}
        numColumns = {2}/>
      </View>

      {/*<TextInput
        value={Category}
        placeholder="Enter new category"
        onChangeText={(newCat) => setCategory(newCat)}
    />
      <Button
          title="Submit"
          onPress={() => {
            addCategory(Category);
            setCategory("");
          }}/>*/}
    </View>
  )
};

export default CategoryPage;
