import { cartActionTypes } from './cart.types'


export const toggleDropdownCart = () => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_CART
})

export const addCartItem = (item) => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
})