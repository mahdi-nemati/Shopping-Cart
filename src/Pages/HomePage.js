import Layout from "../Layout/Layout";
import * as data from "../Data/data";
import { toast } from "react-toastify";
import { useCartActions, useCart } from "../Providers/CartProvider";
const checkInCart = (cart, product) => {
  return cart.find((c) => c.id === product.id);
};
const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    if (!checkInCart(cart, product)) {
      toast.success(`${product.name} added to cart`);
    }else{
      toast.warning(`${product.name} already added`)
    }
  };
  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="productImg">
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div className="productDetails">
                  <p>{product.name}</p>
                  <p> $ {product.price}</p>
                </div>
                <button
                  onClick={() => addProductHandler(product)}
                  className="btn primary"
                >
                  {checkInCart(cart, product) ? "in cart" : " Add to cart"}
                </button>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
