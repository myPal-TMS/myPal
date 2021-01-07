import { combineReducers, createStore } from 'redux';
import { catReducer, subCatReducer, sentenceReducer } from './myPal_redux/reducer'

const rootReducer = combineReducers ({categories: catReducer, subcategories: subCatReducer, sentences: sentenceReducer})
const store = createStore(rootReducer);


export default store;