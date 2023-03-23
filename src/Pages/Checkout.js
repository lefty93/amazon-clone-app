import React from 'react'
import { useStateValue } from '../Context/StateProvider'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="checkout"></div>
    )
}

export default Checkout