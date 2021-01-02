import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CategoryPage from './components/CategoryPage';
import SubCategoryPage from './components/SubCategoryPage';
const App = () => {
  return(
    <View>
      <CategoryPage />
      <SubCategoryPage />
    </View>
    
  )
}

export default App;