import "./ProductCard.css";
import { UseCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const {name, price, image} = product;

  const {addToCart,removeFormCart,cartList} = UseCart();
  const [isInCart, setISInCart] = useState(false);

  useEffect(()=>{
    const isInCart = cartList.find(cartElement => cartElement.id === product.id);
    if(isInCart){
      setISInCart(true);
    }
    else{
      setISInCart(false);
    }
  },[cartList]);

  // function handleAdd (){
  //   addToCart(product);    
  // }

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (<button className ='remove' onClick={()=>removeFormCart(product)}>Remove</button>):
        (<button onClick={()=>addToCart(product)}>Add To Cart</button>)}
        
      </div>
    </div>
  )
}
