import React from "react";


import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
   const [ { basket, user }, dispatch] = useStateValue();  

  const handleAuthentication = () => {
    if (user){
      auth.signOut();

    }

  }

  return (
    <div className="header">
      
        
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      <div className="header__nav">
     

        
          

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
               { basket?.length} </span>
           
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
