import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";
const Navigation = () => {
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
              to="/card"
              className={(n) => (n.isActive ? `${styles.active}` : "")}
            >
              card
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
