import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { MdShoppingCart } from "react-icons/md";
import "./CartItem.css";
const CardPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  // increment
  const incHandler = (item) => {
    dispatch({
      type: "increment",
      payload: item,
    });
  };
  // decrement
  const decHandler = (item) => {
    dispatch({
      type: "decrement",
      payload: item,
    });
  };
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  if (!cart.length)
    return (
      <Layout>
        <main class="flex flex-col justify-center items-center mt-44 text-teal-800">
          <span class="text-7xl sm:text-8xl lg:text-9xl ">
            <MdShoppingCart />
          </span>
          <h3 class="mt-3 sm:text-xl lg:text-2xl">
            Your shopping cart is empty
          </h3>
          <Link
            to="/"
            class="flex justify-center mt-6 bg-blue-500
           text-zinc-200 pr-7 pl-7 pb-1 pt-1 sm:text-lg
           rounded-md lg:text-xl"
          >
            Home
          </Link>
        </main>
      </Layout>
    );
  return (
    <Layout>
      <main>
        <section class="flex flex-col md:flex-row md:mt-20">
          <section class="mt-20 pl-2 pr-2 sm:pl-8 sm:pr-8 md:w-8/12 ">
            {cart.map((item) => {
              return (
                <div
                  key={item.id}
                  class="flex items-center mb-7 border-b pb-3 sm:text-lg md:text-xl lg:text-2xl"
                >
                  <div class="w-3/12">
                    <img
                      class="w-full h-auto"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div class="flex justify-between w-9/12 items-center p-2">
                    <div>{item.name}</div>
                    <div> $ {item.offPrice * item.quantity}</div>
                    <div
                      class="flex border border-teal-400 rounded-md
                     w-4/12 justify-between items-center text-base sm:text-lg md:text-xl"
                    >
                      <button
                        class="border-r border-teal-400 w-4/12"
                        onClick={() => decHandler(item)}
                      >
                        -
                      </button>
                      <p class=" w-4/12 flex justify-center">
                        {" "}
                        {item.quantity}
                      </p>
                      <button
                        class="border-l border-teal-400 w-4/12 "
                        onClick={() => incHandler(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
          <section class="flex flex-col text-teal-800 pl-2 pr-2 
          sm:pl-8 sm:pr-8 sm:text-lg  md:text-xl
           md:w-4/12 md:top-40 md:right-3 lg:text-2xl md:fixed">
            <div class="flex justify-between font-semibold mb-2">
              <p>Cart Summery</p>
              <span>
                {cart.length} {cart.length === 1 ? "item" : "items"}
              </span>
            </div>
            <div class="flex justify-between">
              <p>cart total</p>
              <span>$ {originalTotalPrice}</span>
            </div>
            <div
              class="flex justify-between pb-2 
            text-red-500 border-b border-teal-300"
            >
              <p>cart discount</p>
              <span>$ {originalTotalPrice - total}</span>
            </div>
            <div class="flex justify-between pt-2">
              <p>net price</p>
              <span>$ {total}</span>
            </div>
            <Link to="/checkout" class="flex justify-center">
              <button
                class="bg-blue-500 w-full text-zinc-200 
              mt-4 pt-2 pb-2 pl-4 pr-4 rounded-md "
              >
                Check Out
              </button>
            </Link>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default CardPage;
