import React from 'react';
import '../css/order.css';
import moment from 'moment'
import CheckOutProducts from './CheckOutProducts';
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
   
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => 
                   <CheckOutProducts
                      id={item.id}
                      price={item.price}
                      title ={item.title} 
                      image={item.image} 
                      rating={item.rating} 
                      hideButton={true}
                    />
            )}
             <div className="order__total">
                <CurrencyFormat 
                        renderText = {(value) =>{
                            return( <>
                                <h3>Order Total: {value}</h3>
                                </>
                            )
                        }}
                        decimalScale = {2}
                        value={order.data?.amount / 100}
                        displayType={"text"}
                        thousandSepator={true}
                        prefix={"$"}
                    />

             </div>
               
        </div>
    )
}

export default Order
