import React from 'react'
import './css/header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './store/StateProvider'
import {Link} from 'react-router-dom'
import { auth } from './store/firebase';


export default function Header() {

    const [{basket, user}] = useStateValue();

    const handleAuth = () => {
        if(user){
            auth.signOut()
        }
        else{
            console.log('user signed out')
        }
    }

    return (
        <div className="header">
          <Link to="/" className="header__link">  
             <img alt="banner" className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"></img>
          </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={user ? "" : "/login"} onClick={handleAuth}>
                    <div className="header__option">
                        <span className="header__optionLineOne">hello {user? user.email : "Guest"}</span>
                        <span className="header__optionLineTwo">
                           { user ? "Sign out" : "Sign in"}
                        </span>
                    </div>
                </Link>
                <Link to="/orders" className="header__option">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>  
                </Link>
                <Link to="/">
                    <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
               <Link className="header__link" to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
