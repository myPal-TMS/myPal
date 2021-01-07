import {
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    GET_SENTENCES,
    ADD_CATEGORY, ADD_SUBCATEGORY
} from '../constants'

let catID = 0;
let subID = 0;
let sentID = 0;

const initialCatState = [{ id: 0, title: "cat1" }]

const initialSubCatState = [{ id: 0, name: "subcat1"}]

export const catReducer = (state = initialCatState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return [
                ...state,
                {
                    id: ++catID,
                    title: action.title
                }
            ]
        case GET_CATEGORIES:
            return state
        default:
            return state
    }
}

export const subCatReducer = (state = initialSubCatState, action) => {
    switch (action.type){
        case ADD_SUBCATEGORY:
            return [
                ...state,
                {
                    id: ++subID,
                    title: action.title
                }
            ]
         case GET_SUBCATEGORIES:
            return state
         default: 
            return state
    }
}