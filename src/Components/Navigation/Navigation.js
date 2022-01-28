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
      <nav class="bg-teal-300	h-16 md:h-20 lg:h-24 fixed top-0 w-full 
      text-2xl text-teal-800 sm:flex sm:justify-center 
      sm:text-3xl md:text-4xl lg:text-5xl">
        <div class="flex  items-center justify-between h-full sm:w-11/12 ">
          <ul class="flex items-center justify-center ml-3">
            <li class="mr-4 text-lg sm:mr-8 sm:text-xl md:text-2xl md:mr-10 
            lg:text-3xl lg:mr-16">
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
            <li class="ml-4 sm:ml-8 md:ml-10 lg:ml-16">
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
