import React from 'react'
import '../css/subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../store/StateProvider'

export default function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    const calculateBasket = (basket) => {
        return basket.reduce((price, item) => item.price + price, 0)
    }
    return (
        <div className="subtotal">
           
            <CurrencyFormat
              renderText={(value) => (
                  <>
                  <p>
                      Subtotal ({basket.length} items): <strong>{calculateBasket(basket)}</strong>
                  </p>
                  <small className="subtotal__gift">
                      <input type="checkbox"/>
                          This order contains a gift
                     
                  </small>
                  </>

              )}
              decimalScale={2}
               value={0}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}
