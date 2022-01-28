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
    } else {
      toast.warning(`${product.name} already added`);
    }
  };
  return (
    <Layout>
      <main>
        <section class="flex flex-wrap">
          {data.products.map((product) => {
            return (
              <section key={product.id}>
                <div class="">
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div>
                  <p>{product.name}</p>
                  <p> $ {product.price}</p>
                </div>
                <button onClick={() => addProductHandler(product)}>
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
