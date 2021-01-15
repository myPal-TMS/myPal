import {
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    GET_SENTENCES,
    ADD_CATEGORY, ADD_SUBCATEGORY, ADD_SENTENCE
} from '../constants'

// let catID = 0;
let subID = 0;
let sentID = 0;

// const initialCatState = [{ id: 0, title: "cat1" }]

// const initialSubCatState = [{ id: 0, title: "subcat1"}]
const initialSentenceState = [{ id: 0, sentence: "hello world"}]
export const catReducer = (state = [], action) => {
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
            state = action.categories
            return state
        default:
            return state
    }
}

export const subCatReducer = (state = [], action) => {
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
             state = action.subcategories
            return state
         default: 
            return state
    }
}

export const sentenceReducer = (state = initialSentenceState, action) => {
    switch (action.type){
        case ADD_SENTENCE:
            return [
                ...state,
                {
                    id: ++sentID,
                    sentence: action.sentence
                }
            ]
        case GET_SENTENCES:
            return state
        default: 
            return state
    }
}