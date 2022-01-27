import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";
import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  return (
    <header>
      <nav class="bg-teal-300	h-16 fixed top-0 w-full text-2xl text-teal-800	">
        <div class="flex  items-center justify-between h-full">
          <ul class="flex items-center justify-center ml-3">
            <li class="mr-4 text-lg">
              <p>Mahdi Shop</p>
            </li>
            <li>
              <NavLink
                to="/"
                className={(n) => (n.isActive ? `${styles.active}` : "")}
              >
                <AiFillHome />
              </NavLink>
            </li>
          </ul>
          <ul class="flex items-center justify-center mr-2">
            <li>
              <NavLink
                to="/cart"
                className={(n) => (n.isActive ? `${styles.active}` : "")}
              >
                <FaShoppingCart />
                {cart.length > 0 ? <span> {cart.length}</span> : ""}
              </NavLink>
            </li>
            <li class="ml-4">
              {userData ? (
                <p>Welcome</p>
              ) : (
                <NavLink
                  to="/signup"
                  className={(n) => (n.isActive ? `${styles.active}` : "")}
                >
                  <BiLogIn />
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
