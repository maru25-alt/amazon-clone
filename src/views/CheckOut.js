import React from 'react'
import '../css/Cart.css'
import Subtotal from '../components/Subtotal.js'
import {useStateValue} from '../store/StateProvider'
import CheckoutProduct from '../components/CheckOutProducts'


export default function CheckOut() {
    const [{basket, user}] = useStateValue();
 
    return (
        <div className="checkout">
           <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt="banner">
                </img>

                <div>
                    <h2>{user ? user.email : ""}</h2>
                    <h3 className="checkout__title">Your shopping Basket</h3>
                    <div className="checkout__products">
                      
                        {basket.map((e, i) => {
                            return  <CheckoutProduct 
                            key={i} 
                            id={e.id} 
                            title={e.title}
                            price={e.price} 
                            rating={e.rating}
                            image={e.image}/>
                        })}
                   
                  </div>

                </div>
            </div>

            <div className="checkout__right">

                    <Subtotal/>
            </div>

                
           
        </div>
    )
}
