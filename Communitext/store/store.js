import { createStore } from 'redux';
import { addcatReducer } from './myPal_redux/reducer'
import { _addCategory } from './myPal_redux/actions'

const store = createStore(addcatReducer);


export default store;