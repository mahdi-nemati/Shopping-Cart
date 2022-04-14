import Layout from "../Layout/Layout";
import * as data from "../../Data/data";
import { toast } from "react-toastify";
import { useCartActions, useCart } from "../../Providers/CartProvider";
import Footer from "../Components/Footer/Footer";
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
      <main class="mt-7 md:mt-12 lg:mt-20 bg-slate-100">
        <section class="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
          {data.products.map((product) => {
            return (
              <section
                key={product.id}
                class="flex flex-col mt-14
              w-10/12 bg-teal-100 rounded-xl pb-4"
              >
                <div class="flex justify-center pt-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    class="w-11/12
                   h-auto rounded-md	"
                  />
                </div>
                <div
                  class="flex justify-between text-lg sm:text-xl lg:text-2xl mt-3 pr-2 pl-2
                 text-teal-800"
                >
                  <p>{product.name}</p>
                  <p> $ {product.price}</p>
                </div>
                <button
                  class="mt-6 bg-blue-500 text-zinc-200 p-2 m-1 rounded-md lg:text-lg"
                  onClick={() => addProductHandler(product)}
                >
                  {checkInCart(cart, product) ? "in cart" : " Add to cart"}
                </button>
              </section>
            );
          })}
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default HomePage;
