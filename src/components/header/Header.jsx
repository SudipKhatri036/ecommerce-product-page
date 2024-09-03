import { RiMenu2Line } from "react-icons/ri";

import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import HeaderAction from "../headerAction/HeaderAction";
import styles from "./Header.module.css";
import { useCart } from "../../context/CartContext";

function Header() {
  const { handleMenuOpen } = useCart();
  return (
    <header className={styles.header}>
      <div className="flex">
        <button onClick={handleMenuOpen}>
          <RiMenu2Line className={styles.openMenu} />
        </button>
        <Logo />
        <Navbar />
      </div>
      <HeaderAction />
    </header>
  );
}

export default Header;
