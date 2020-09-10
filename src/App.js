import React, {useEffect} from 'react';
import './css/App.css';
import Header from './Header'
import Home from './views/Home'
import CheckOut from './views/CheckOut'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './views/LoginPage'
import { auth } from './store/firebase';
import {useStateValue} from './store/StateProvider';


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
  }, [])
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
            <Route exact path="/">
              <Header/>
              <Home/>
            </Route>
         </Switch>
     </div>
     </Router>
    
    </>
  );
}



export default App;
