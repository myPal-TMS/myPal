import 'react-native-gesture-handler'


import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack';

import CategoryPage from './components/CategoryPage';
import SubCategoryPage from './components/SubCategoryPage';

const Stack = createStackNavigator();



const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoryPage}/>
        <Stack.Screen name="Subcategory" component={SubCategoryPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App;