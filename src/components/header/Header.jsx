import { RiMenu2Line } from "react-icons/ri";

import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import HeaderAction from "../headerAction/HeaderAction";
import styles from "./Header.module.css";
import { useNav } from "../../context/NavContext";

function Header() {
  const { handleMenuOpen } = useNav();
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
