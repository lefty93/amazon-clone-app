import React from 'react'
import './Subtotal.css'
import currency from 'currency.js'
import { useStateValue } from '../Context/StateProvider'
import { getBasketTotal } from '../Context/reducer'

function Subtotal() {
  const [{ basket },] = useStateValue()
  const price = currency(getBasketTotal(basket), { separator: ',' }).format();
  console.log(getBasketTotal(basket))
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{price}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" name="" id="" />
        This order contains a gift.
      </small>
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal