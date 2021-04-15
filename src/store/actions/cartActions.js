import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:8000/api/product/603f2b35c55644379f19ede1`);
    console.log(data);

    dispatch ({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            photo: data.photo,
            price: data.price,
            stock: data.stock,
            qty
        }
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch ({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};