import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    product:{},
    loading: false,
    error: false
};

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                products: action.payload
            }

        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
};

export const productDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }

        case actionTypes.GET_PRODUCTS_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case actionTypes.GET_PRODUCTS_DETAILS_RESET:
            return {
                ...state,
                product: {}
            }
        default:
            return state;
    }
};