import { useCart } from "../../context/CartContext";
import { ImCross } from "react-icons/im";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isNavActive, handleMenuClose } = useCart();
  return (
    <nav className={`${styles.nav}  ${isNavActive ? styles.navActive : ""}`}>
      <button onClick={handleMenuClose}>
        <ImCross className={styles.menuClose} />
      </button>
      <ul className="flex">
        <li>
          <a href="#">Collection</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
