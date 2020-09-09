import React from 'react';
import './css/App.css';
import Header from './Header'
import Home from './views/Home'
import CheckOut from './views/CheckOut'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
     <Router>
     <div className="App"> 
    <Header/>
        <Switch>
          <Route path="/checkout">
             <CheckOut/>
          </Route>
       <Route path="/about">
             <About />
           </Route>
            <Route exact path="/">
              <Home/>
            </Route>
         </Switch>
     </div>
     </Router>
    {/* <Header/>
    <Home/> */}
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
