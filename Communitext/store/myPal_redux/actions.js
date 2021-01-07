import {
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    GET_SENTENCES,
    ADD_CATEGORY, ADD_SUBCATEGORY
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

export const _getSubcategories = (subcategories) => {
    return {
        type: GET_SUBCATEGORIES, 
        subcategories
    }
}

export const _addSubcategory = (title) => {
    return {
        type: ADD_SUBCATEGORY,
        title
    }
}