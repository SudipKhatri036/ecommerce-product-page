import { useCart } from "../../context/CartContext";
import styles from "./ThumbnailImages.module.css";

function ThumbnailImages() {
  const { handleSmallImgClick } = useCart();
  return (
    <div className={styles.thumbnailImageCont}>
      <ul className="flex">
        {Array.from({ length: 4 }).map((_, indx) => {
          return (
            <li key={indx} onClick={() => handleSmallImgClick(indx + 1)}>
              <img
                src={`./image-product-${indx + 1}-thumbnail.jpg`}
                alt="Product Thumbnail Image"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ThumbnailImages;
