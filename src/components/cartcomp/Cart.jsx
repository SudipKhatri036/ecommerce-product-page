import { useCart } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { cartItemsList } = useCart();

  return (
    <div className={styles.cartCont}>
      <h2>Cart</h2>
      <div className={styles.line}></div>
      {cartItemsList.length ? (
        <>
          {cartItemsList.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
          <div className={styles.btnCont}>
            <Button text="Confirm Order" />
          </div>
        </>
      ) : (
        <p className={styles.emptyCart}>Your Cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
