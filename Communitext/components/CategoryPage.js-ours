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
import { render } from "react-dom";

const CategoryPage = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const categories = useSelector(({categories}) => categories);
  const [Category, setCategory] = useState("");
  
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  
  const addCategory = (newCategory) => {
    if (newCategory != "") {
      dispatch(_addCategory(newCategory));
    }
  };

  const renderItem = ({item}) => (

    <TouchableOpacity 
    style = {styles.button}
    onPress={() =>
            
      navigation.navigate("Subcategory", { category: item.name })
    }>
      
      <Image style = {styles.picture} source={require("../assets/Images/Categories/Actions/Actions.png")} />
        <Text
        style = {styles.text}>
            {item.name}
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
        keyExtractor = { (item, index) => '#' + item.id.toString()} 
        numColumns = {2}/>
        
      </View>
    </View>
			
  );
};

export default CategoryPage;
