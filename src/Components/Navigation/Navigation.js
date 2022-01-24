import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";
import { useCart } from "../../Providers/CartProvider";
const Navigation = () => {
  const { cart } = useCart();
  return (
    <header>
      <nav className={styles.nav}>
        <ul>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
