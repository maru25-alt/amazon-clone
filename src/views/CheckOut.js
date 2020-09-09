import React from 'react'
import '../css/Cart.css'
import Subtotal from '../components/Subtotal.js'
import {useStateValue} from '../store/StateProvider'
import Product from '../components/Product'


export default function CheckOut() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
           <div className="checkout__left">
                <img
                className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg">
                </img>

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    <div className="checkout__products">
                   {basket.map(e => {
                       return  <div className="checkout__product">
                                 <Product key={e.id} id={e.id} title={e.title} price={e.price} rating={e.rating} image={e.image}/>
                             </div>

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
