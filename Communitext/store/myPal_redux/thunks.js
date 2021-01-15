import axios from 'axios';
import { allCategories, allSubcategories } from '../../api';
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
            allSubcategories((subcategories) => {
                dispatch(_getSubcategories(subcategories))
            })
        }
        catch (err){
            console.log(err)
        }
    }
}