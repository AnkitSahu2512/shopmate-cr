import "./CartCard.css";
import { UseCart } from "../context/CartContext";

export const CartCard = ({product}) => {
  const {name, price, image} = product;
  const { removeFormCart} = UseCart();  

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=>removeFormCart(product)}>Remove</button>
      </div>
  )
}
