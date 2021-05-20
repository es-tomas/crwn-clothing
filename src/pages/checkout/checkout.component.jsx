import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='haeder-block'>
                <span>Product</span>
            </div>
            <div className='haeder-block'>
                <span>Description</span>
            </div>
            <div className='haeder-block'>
                <span>Quantity</span>
            </div>
            <div className='haeder-block'>
                <span>Price</span>
            </div>
            <div className='haeder-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }

        <div className='total'>
            <span>TOTAL: ${total}</span>
            <div className='test-warning'>
                *Please use the following test credit card for payments
                <br />
                4242 4242 4242 4242 - Exp:01/20 - CVV:123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);