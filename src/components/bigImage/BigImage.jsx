import { useProductShow } from "../../context/ProductShowContext";
import styles from "../main/Main.module.css";

function BigImage() {
  const { currentIndx, setShowSlider } = useProductShow();

  return (
    <img
      src={`./image-product-${currentIndx}.jpg`}
      alt="Big Product Image"
      className={styles.bigImage}
      onClick={() => setShowSlider(true)}
    />
  );
}

export default BigImage;
