import { cartActionTypes } from './cart.types'


export const toggleDropdownCart = () => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_CART
})

export const addCartItem = (item) => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
})

export const removeCartItem = (item) => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})