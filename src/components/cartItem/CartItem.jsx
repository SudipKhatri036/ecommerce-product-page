import { RiDeleteBin5Line } from "react-icons/ri";
import styles from "./CartItem.module.css";
import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const { productName, price, qty, id } = item;

  const { handleDelete } = useCart();

  if (item)
    return (
      <div className={`${styles.cartItemCont} flex`}>
        <img src="./image-product-1-thumbnail.jpg" alt="Product Image" />

        <div className="detail">
          <h3>{productName}</h3>
          <div className="price-detail">
            <p>
              ${price.toFixed(2)} X {qty}{" "}
              <span>${(price * qty).toFixed(2)}</span>
            </p>
          </div>
        </div>
        <button onClick={() => handleDelete(id)}>
          <RiDeleteBin5Line />
        </button>
      </div>
    );
}

export default CartItem;
