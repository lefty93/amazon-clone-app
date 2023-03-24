import React from 'react'
import './Subtotal.css'
import currency from 'currency.js'

function Subtotal() {
    const price = currency(1234.56, { separator: ',' }).format();
  return (
      <div className="subtotal">
          <p>
          </p>
          {price}
          <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal