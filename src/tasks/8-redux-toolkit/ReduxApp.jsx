import ProductList from"./components/ProductList";
import Cart from "./components/Cart";

function ReduxApp() {
    return(
        <div>
            <h1>Redux ToolKit Shopping Cart</h1>
            <ProductList />
            <hr />
            <Cart />
        </div>
    );
}

export default ReduxApp;
