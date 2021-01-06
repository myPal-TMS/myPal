import {
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    GET_SENTENCES,
    ADD_CATEGORY
} from '../constants'



export const _addCategory = (title) => {
    return {
        type: ADD_CATEGORY,
        title
    }
}

export const _getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        categories
    }
}