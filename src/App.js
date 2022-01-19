import React  from "react";
import "./App.css";
import Header from './Header';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Mobile from "./Mobile";






function App() {


    
  

    return (
      <Router>
      <div className="app">


        <Switch> 
          <Route path="/Mobile">
            <Header />
            <Mobile/>
            </Route>
            
         
          <Route path="/orders">
            <Header />
            
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
          <Route path="/">
            <Header />
            <Mobile />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}
export default App;
