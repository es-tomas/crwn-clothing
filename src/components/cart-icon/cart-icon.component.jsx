import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleDropdownCart } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleDropdownCart }) => (
    <div className='cart-icon' onClick={toggleDropdownCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleDropdownCart: () => dispatch(toggleDropdownCart())
})

export default connect(null, mapDispatchToProps)(CartIcon);