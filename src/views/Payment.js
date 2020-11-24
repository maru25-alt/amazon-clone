import React, { useEffect, useState } from 'react'
import { useStateValue } from '../store/StateProvider'
import CheckOutProducts from '../components/CheckOutProducts'
import { Link } from 'react-router-dom'
import '../css/payment.css';
import  {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { getBasketTotal } from '../store/reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import {useHistory} from 'react-router-dom';
import {db } from '../store/firebase'

export default function Payment() {
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setprocessing] = useState(false)
    const [succeeded, setsucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)
    const stripe = useStripe();
    const elements = useElements();
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

   useEffect(() => {
       
      const getClientSecret = async () => {
         const response = await axios({
             method: 'post',
             url: `/payments/create?total=${getBasketTotal(basket) * 100}`
         })
         setClientSecret(response.data.clientSecret.client_secret)
       
      } 

      getClientSecret()
   }, [basket])
   console.log(user?.uid)
    const handleSubmit = async (e) => {
           e.preventDefault();
           setprocessing(true);
            await  stripe.confirmCardPayment(clientSecret, {payment_method: {
               card: elements.getElement(CardElement)
               }
            }).then(({paymentIntent}) =>{
                console.log("processing", paymentIntent);
            
                db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })


                setsucceeded(true);
                setprocessing(false);
                setError(null);
                
                dispatch( {
                    type: "EMPTY_BASKET"
                })
                history.replace('/orders')
            })
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")

    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                   Checkout <Link to="/checkout">{basket?.length} items</Link> 
                </h1>


                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React lean</p>
                        <p>Los Angelaos, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((e, i) => {
                           return <CheckOutProducts
                           key={i} 
                            id={e.id} 
                            title={e.title}
                            price={e.price} 
                            rating={e.rating}
                            image={e.image}
                            />
                        })}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                   renderText = {(value) =>{
                                      return( <>
                                         <h3>Order Total: {value}</h3>
                                         </>
                                       )
                                   }}
                                   decimalScale = {2}
                                   value={getBasketTotal(basket)}
                                   displayType={"text"}
                                   thousandSepator={true}
                                   prefix={"$"}
                                />
                            </div>
                            <button disabled={processing || disabled ||succeeded || basket.length <= 0}>
                                <span>{processing ?<p>Processing</p> : <p>Buy Now</p>} </span>
                            </button>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
