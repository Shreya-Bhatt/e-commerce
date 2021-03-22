import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    product: null
};

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products]
            };
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state
            };
        case actionTypes.FETCH_PRODUCT:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default reducer;