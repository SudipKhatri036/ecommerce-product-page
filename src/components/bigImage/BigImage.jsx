import { useCart } from "../../context/CartContext";
import styles from "../main/Main.module.css";

function BigImage() {
  const { bigImg } = useCart();

  return (
    <img src={bigImg} alt="Big Product Image" className={styles.bigImage} />
  );
}

export default BigImage;
