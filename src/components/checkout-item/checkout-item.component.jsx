import { connect } from 'react-redux';
import { removeCartItem, addCartItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addCartItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item' >
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => addCartItem(cartItem)} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div >);
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeCartItem(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

