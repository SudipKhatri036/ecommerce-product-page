import styles from "../productAction/ProductAction.module.css";
import { useCart } from "../../context/CartContext";

function CartActionBtn() {
  const { qty, setQty } = useCart();

  function handleInc() {
    setQty((qt) => qt + 1);
  }

  function handleDec() {
    if (qty === 0) return;
    setQty((qt) => qt - 1);
  }

  return (
    <div className={`${styles.cartActionBtn} flex`}>
      <button onClick={handleDec}>-</button>
      <p>{qty}</p>
      <button onClick={handleInc}>+</button>
    </div>
  );
}

export default CartActionBtn;
