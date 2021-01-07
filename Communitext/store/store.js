import { combineReducers, createStore } from 'redux';
import { catReducer, subCatReducer } from './myPal_redux/reducer'

const rootReducer = combineReducers ({categories: catReducer, subcategories: subCatReducer})
const store = createStore(rootReducer);


export default store;