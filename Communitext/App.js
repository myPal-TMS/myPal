import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import CategoryPage from './components/CategoryPage';
import SubCategoryPage from './components/SubCategoryPage';
import store from './store/store'
import Sentences from './components/Sentences';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "myPAL" component = {CategoryPage} />
          <Stack.Screen name = "Subcategory" component = {SubCategoryPage} options={({ route }) => ({ title: route.params.category })}/>
          <Stack.Screen name = "Sentences" component = {Sentences} options = {({ route }) => ({ title: route.params.subcategory })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;