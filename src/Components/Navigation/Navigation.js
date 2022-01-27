import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";
import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";
const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  return (
    <header>
      <nav class="bg-rose-300 h-16 fixed top-0 w-full">
        <ul class="flex  ">
          <li>
            <NavLink
              to="/"
              className={(n) => (n.isActive ? `${styles.active}` : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={(n) => (n.isActive ? `${styles.active}` : "")}
            >
              <p> cart</p>
              {cart.length > 0 ? <span> {cart.length}</span> : ""}
            </NavLink>
          </li>
          <li>
            {userData ? (
              <p>Welcome</p>
            ) : (
              <NavLink
                to="/signup"
                className={(n) => (n.isActive ? `${styles.active}` : "")}
              >
                signup
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
