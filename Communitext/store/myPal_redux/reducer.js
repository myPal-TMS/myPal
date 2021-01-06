import {
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    GET_SENTENCES,
    ADD_CATEGORY
} from '../constants'

let catID = 0;
let subID = 0;
let sentID = 0;

const initialCatState = [{ id: 0, title: "cat1" }]

export const addcatReducer = (state = initialCatState, action) => {
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

