import { applyMiddleware, combineReducers, createStore } from 'redux';
import { catReducer, subCatReducer, sentenceReducer } from './myPal_redux/reducer'
import thunks from 'redux-thunk'

const rootReducer = combineReducers ({categories: catReducer, subcategories: subCatReducer, sentences: sentenceReducer})
const store = createStore(rootReducer, applyMiddleware(thunks));


export default store;