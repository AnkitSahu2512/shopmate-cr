import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer,initialState);
//indisual method to perform the action
    const addToCart = (product)=>{
        //stored the updated information
        const updatedCart = state.cartList.concat(product);
        updateTotal(updatedCart);
        //to proper update we use dispatch
        dispatch({
            type: 'Add_TO_CART',//what we need to performs
            payload:{
                products: updatedCart// we may pass multoiple value
            }
        })
    }

    const removeFormCart = (product)=>{
        const updatedCartList = state.cartList.filter(current=>current.id !== product.id);
        console.log(updatedCartList);
        updateTotal(updatedCartList);
        dispatch({
            type:'Remove_FROM_CART',
            payload:{
                prod:updatedCartList
            }
        })
    }

    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total +  product.price)
        dispatch({
            type:"Update_Total",
            payload:{
                total
            }
        }) 
        
    }

     const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFormCart        
     };

    return (
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCart = ()=>{
    return useContext(CartContext);
}