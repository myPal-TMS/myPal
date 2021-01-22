import {allCategories, allSentences, allSubcategories, insertSentence} from '../../api';
import { _getCategories, _getSentences, _getSubcategories, _addSentence } from './actions';


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

export const getSubCategories = (categoryID) => {
    return async (dispatch) => {
        try{
            allSubcategories(categoryID, (subcategories) => {
                dispatch(_getSubcategories(subcategories))
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

export const getSentences = (subcatID) => {
    return async (dispatch) => {
        try{
            allSentences(subcatID, (sentences) => {
                dispatch(_getSentences(sentences))
            })
        }
        catch (err){
            console.log(err)
        }
    }
}
export const addSentence = (subcatID, sentence) => {
    return async (dispatch) => {
        try{
            insertSentence(subcatID, sentence, (newSentence) => {
                //console.log(newSentence)
                dispatch(_addSentence(newSentence))
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

