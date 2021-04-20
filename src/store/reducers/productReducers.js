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

        default:
            return state;
    }
};

export const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.product],
                // products: state.products.concat(action.payload),
                loading: false
            }

        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                loading: false,
                products: state.products.filter(product => product._id !== action.payload),
            }

        case actionTypes.ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
};