import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
    { id: 1, name:"Headphones",price: 1500 },
    { id: 2, name:"Keyboard",price: 2000 },
    { id: 3, name:"Mouse",price: 800 },
    { id: 4, name:"Monitor",price: 12000 }
];

function ProductList() {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Products</h2>

            {products.map((product) =>(
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>₹{product.price}</p>

                    <button onClick={() => dispatch(addToCart(product))}>
                        Add to Cart
                    </button>

                </div>

            ))}

        </div>
    );
}
export default ProductList;
