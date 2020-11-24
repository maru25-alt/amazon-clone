import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import '../css/checkoutProduct.css';
import {useStateValue} from '../store/StateProvider'


export default function CheckOutProducts({price, title, image, rating, id, hideButton}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove from basket
        dispatch({
            type: "REMOVE_FORM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
             <img className="checkoutProduct__image" src={image} alt="product"></img>
        
              <div className="checkoutProduct__info">
                  <p className="checkoutProduct__title">{title}</p>
                  <p className="checkoutProduct__price">
                      <small>$</small><strong> {price}</strong>
                  </p>
                  <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_, i) => {
                        return  <StarIcon key={i} />
                        })
                        }
                       
                  </div>
                  {
                      hideButton  !== true &&  <button onClick={removeFromBasket}>Remove from Cart</button>
                  }
                  
              </div>
        </div>
    )
}
