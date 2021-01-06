import React, { useState } from "react";
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

const CategoryPage = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const categories = useSelector((categories) => categories);
  const [Category, setCategory] = useState("");


  const addCategory = (newCategory) => {
    if (newCategory != "") {
      dispatch(_addCategory(newCategory));
    }
  };

  return (
    <ScrollView>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() =>
            navigation.navigate("Subcategory", { category: category.title })
          }
        >
          <Image source={require("../assets/images/smiley.jpg")} />
          <Text>{category.title}</Text>
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
