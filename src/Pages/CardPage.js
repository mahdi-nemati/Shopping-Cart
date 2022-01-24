import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";

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
        <main>
          <h3>no product in cart</h3>
          <Link to="/">Home</Link>
        </main>
      </Layout>
    );
  return (
    <Layout>
      <main className="container">
        <section className="cartCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cartItem">
                  <div className="cartImage">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cartDetails">
                    <div>{item.name}</div>
                    <div> $ {item.offPrice * item.quantity}</div>
                    <div className="cartBtn">
                      <button onClick={() => decHandler(item)}>remove</button>
                      <p> {item.quantity}</p>
                      <button onClick={() => incHandler(item)}>Add</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="summery">
            <h3>Cart Summery</h3>
            {/* <p>$ {total}</p> */}
            <div className="sumItem">
              <p>cart total</p>
              <span>$ {originalTotalPrice}</span>
            </div>
            <div className="sumItem">
              <p>cart discount</p>
              <span>$ {originalTotalPrice - total}</span>
            </div>
            <div className="sumItem net">
              <p>net price</p>
              <span>$ {total}</span>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default CardPage;

