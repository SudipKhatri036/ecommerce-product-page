import { useCart } from "../../context/CartContext";
import Button from "../button/Button";
import CartActionBtn from "../cartActionBtn/CartActionBtn";
import styles from "./ProductAction.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductAction() {
  const { handleAddToCart } = useCart();
  return (
    <div className={`${styles.productActionCont} flex`}>
      <CartActionBtn />
      <Button cbFunc={() => handleAddToCart()} customClass={"addtocart"}>
        <MdOutlineShoppingCart />
        Add To Cart
      </Button>
    </div>
  );
}

export default ProductAction;
