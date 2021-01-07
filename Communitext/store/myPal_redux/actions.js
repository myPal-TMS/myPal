import {
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    GET_SENTENCES,
    ADD_CATEGORY, ADD_SUBCATEGORY, ADD_SENTENCE
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
export const _getSentences = (sentences) => {
    return {
        type: GET_SENTENCES,
        sentences
    }
}

export const _addSentence = (sentence) => {
    return {
        type: ADD_SENTENCE,
        sentence
    }
}