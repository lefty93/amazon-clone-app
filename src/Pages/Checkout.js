import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import CheckoutProduct from '../Components/CheckoutProduct'
import './Checkout.css'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt="" className="checkout__ad" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is empty.</h2>
                    <p>
                        You have no items in your basket. To buy one or more, click "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        <CheckoutProduct />
                </div>
            )}
        </div>
    )
}

export default Checkout