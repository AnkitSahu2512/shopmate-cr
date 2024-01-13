export const cartReducer = (state, action) => {
    const{type,payload} = action;
    switch(type){
        case "Add_TO_CART":
            return {...state, cartList: payload.products};
        case "Remove_FROM_CART":
            return{...state, cartList:payload.prod}; 
        case "Update_Total":
            return{...state, total:payload.total}; 
        default:
        throw new Error("New Case Found");
    }
}