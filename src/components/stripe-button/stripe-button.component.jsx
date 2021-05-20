import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51It89XICBIq5nUur4ypPdrrH8oTSollrJ49CSMzsbrKpcABRU4szrxTK0yJNloelUYoJLl23sftKiZ4Xc5vPyhY800GUcymc4U";
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;