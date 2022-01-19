import React from "react";
import { useStateValue } from "./StateProvider";
import CheckProduct from "./CheckProduct";
import Subtotal from "./Subtotal";

function Checkout(){ 
  const [{ basket, user}, dispatch] = useStateValue();
return(
  <div className="checkout">
    <div className="checkout__left">
      
      <div>
        <h2 className="checkout__title">Your Shopping Basket</h2>
      </div>
    </div>
    <div className="checkout__right">
      <Subtotal />
    </div>
    {basket.map(item=> (
    <CheckProduct
    
    id={item.id}
    title={item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}
    
    
    />
    ))}

    </div>



)

}

export default Checkout;