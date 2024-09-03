import { RiDeleteBin5Line } from "react-icons/ri";
import styles from "./CartItem.module.css";

function CartItem({ item }) {
  const { productName, price, qty } = item;

  return (
    <div className={`${styles.cartItemCont} flex`}>
      <img src="./image-product-1-thumbnail.jpg" alt="Product Image" />

      <div className="detail">
        <h3>{productName}</h3>
        <div className="price-detail">
          <p>
            ${price} X {qty} <span>$Total</span>
          </p>
        </div>
      </div>
      <button>
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}

export default CartItem;
