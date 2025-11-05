import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
export const Cart = () => {
    const cartItems = useSelector(state => state.cartReducer);
        


    return(
        <>
            <div className="cart-list">
                {cartItems.map((cartItem, index) => (
                    <CartItem key={index} cartItem={cartItem}/>
                ))}
            </div>
        </>
    )
}