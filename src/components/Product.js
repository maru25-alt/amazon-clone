import React from 'react';
import '../css/product.css';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../store/StateProvider'


export default function Product({price, title, image, rating, id}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    const getTitle = (title) => {
        let n = 120
       return title.slice(0, n)
    }
    return (
        <div className="product">
           <div className="product__info">
             <p>{getTitle(title)}</p>  
             <p className="product__price"> 
               <small>$</small> 
               <strong>{price}</strong>    
            </p> 
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => {
                   return  <StarIcon key={i} />
                  })
                }
            </div>
            </div> 
            
            <img src={image} alt={title}></img>
          <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

