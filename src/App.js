import React, {useEffect} from 'react';
import './css/App.css';
import Header from './Header'
import Home from './views/Home'
import CheckOut from './views/CheckOut'
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import Login from './views/LoginPage'
import Payment from './views/Payment'
import Orders from './views/Orders';
import { auth } from './store/firebase';
import {useStateValue} from './store/StateProvider';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from "@stripe/stripe-js"

 const promise = loadStripe("pk_test_51HPvTmH6MnslJF7wY6AkBzLzCZqwvYkqU3vZndCwJbMdHN2LguQODnIkKN7142vWArdgOKZO6sDtfpMcWJOM3DXk00v3Cbt2iZ");

function App() {
  const [ {user},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
          console.log('the user is', authUser)
          if(authUser){
            //user is loggedin
            dispatch({
              type: 'SET_USER',
              payload: authUser
            })
          }
          else{
            //user logged out
            dispatch({
              type: 'SET_USER',
              payload: null
            })
          }
    })
  }, [dispatch])
  return (
    <>
     <Router>
     <div className="App"> 
    
        <Switch>
          <Route path="/checkout">
             <Header/>
             <CheckOut/>
          </Route>
          <Route path="/login">
             <Login/>
           </Route>
           <Route path="/payment">
              <Header/>
              {/* <Payment/> */}
               <Elements stripe={promise}>
                    <Payment/>
              </Elements>
           </Route>
           <Route path="/orders">
             <Header/>
             <Orders />
           </Route>
            <Route exact path="/">
              <Header/>
              <Home/>
            </Route>
            <Route path="*">
              <Redirect to="/"></Redirect>
            </Route>
         </Switch>
     </div>
     </Router>
    
    </>
  );
}



export default App;
