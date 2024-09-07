import { useProductShow } from "../../context/ProductShowContext";
import styles from "../main/Main.module.css";

function BigImage() {
  const { bigImg, setShowSlider } = useProductShow();

  return (
    <img
      src={bigImg}
      alt="Big Product Image"
      className={styles.bigImage}
      onClick={() => setShowSlider(true)}
    />
  );
}

export default BigImage;
