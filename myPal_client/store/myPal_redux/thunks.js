import axios from 'axios';
import { _getCategories, _getSentences, _getSubcategories } from './actions';


export const getCategories = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios.get("http://localhost:3000/api/getCat")
            dispatch(_getCategories(data))
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