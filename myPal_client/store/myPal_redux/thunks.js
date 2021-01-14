import axios from 'axios';
import { allCategories } from '../../api';
import { _getCategories, _getSentences, _getSubcategories } from './actions';


export const getCategories = () => {
    return async (dispatch) => {
        try{
            allCategories((categories) => {
                dispatch(_getCategories(categories))
            })
            
        }
        catch (err){
            console.log(err)
        }
    }
}

export const getSubCategories = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(_getSubcategories(data))
        }
        catch (err){
            console.log(err)
        }
    }
}