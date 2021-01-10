import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
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
  }, [])


  const addCategory = (newCategory) => {
    if (newCategory != "") {
      dispatch(_addCategory(newCategory));
    }
  };

  return (
    <ScrollView>
      {
      categories.map((category) => (
        
        <TouchableOpacity
          key={category.id}
          onPress={() =>
            
            navigation.navigate("Subcategory", { category: category.name })
          }
        >
          <Image source={require("../assets/images/smiley.jpg")} />
          <Text>{category.name}</Text>
        </TouchableOpacity>
      ))}
      <TextInput
        value={Category}
        placeholder="Enter new category"
        onChangeText={(text) => setCategory(text)}
      />
      <Button
        title="Submit"
        onPress={() => {
          addCategory(Category);
          setCategory("");
        }}
      />
    </ScrollView>
  );
};

export default CategoryPage;
