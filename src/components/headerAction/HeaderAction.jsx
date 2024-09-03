import { useCart } from "../../context/CartContext";
import styles from "./HeaderAction.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";

function HeaderAction() {
  const { handleCartOpen, totalCartItem } = useCart();
  return (
    <div className={`${styles.actionCont} flex`}>
      <div>
        <button onClick={handleCartOpen}>
          <MdOutlineShoppingCart className={styles.cartIcon} />
        </button>

        {totalCartItem ? (
          <span className={styles.cartCount}>{totalCartItem || ""}</span>
        ) : (
          ""
        )}
      </div>
      <img
        src="./image-avatar.png"
        alt="Profile pic"
        className={styles.profile}
      />
    </div>
  );
}

export default HeaderAction;
