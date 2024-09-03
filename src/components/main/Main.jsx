import { useCart } from "../../context/CartContext";
import Cart from "../cartcomp/Cart";
import styles from "./Main.module.css";
function Main() {
  const { isCartOpen } = useCart();
  return (
    <main className={styles.main}>
      {isCartOpen && <Cart />}
      <h1>Main</h1>
    </main>
  );
}

export default Main;
