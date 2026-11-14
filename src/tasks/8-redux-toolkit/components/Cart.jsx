import { useSelector, useDispatch } from "react-redux";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
} from "../features/cartSlice";

function Cart() {
    const { items, totalItems, totalPrice } = useSelector(
        (state) => state.cart
    );

    const dispatch = useDispatch();

    return(
        <div>
            <h2>Shopping Cart</h2>

            <p>Total Items: {totalItems}</p>
            <p>Total Price: ₹{totalPrice}</p>

            {items.map((item)=>(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price} × {item.quantity}</p>

                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                        -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                        +
                    </button>

                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                    </button>

                    </div>
            

            ))}

            <button onClick={() => dispatch(clearCart())}>
                Clear Cart
            </button>
        </div>
    );
}

export default Cart;