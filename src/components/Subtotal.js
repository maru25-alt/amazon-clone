import React from 'react'
import '../css/subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../store/StateProvider'
import { getBasketTotal } from '../store/reducer';
import {useHistory} from 'react-router-dom'

export default function Subtotal() {
    const [{basket , user}] = useStateValue();
    const buttonDisabled = basket.length === 0;
    console.log(user);

    const history = useHistory()

    const pushPath = () => {
        if(user === null){
            history.push('/login')
        }
        else{
            history.push('/payment')
        }
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
              renderText={(value) => (
                  <>
                  <p>
                      Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                      <input type="checkbox"/>
                          This order contains a gift
                     
                  </small>
                  </>
              )}
              decimalScale={2}
               value={getBasketTotal (basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button disabled={ buttonDisabled} onClick= {pushPath}>Proceed to Checkout</button>
        </div>
    )
}
