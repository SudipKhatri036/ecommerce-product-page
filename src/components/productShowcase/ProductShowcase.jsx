import { useProductShow } from "../../context/ProductShowContext";
import BigImage from "../bigImage/BigImage";
import styles from "./ProductShowcase.module.css";

function ProductShowcase() {
  const { handleSmallImgClick, currentIndx } = useProductShow();
  return (
    <>
      <BigImage />
      <div className={styles.thumbnailImageCont}>
        <ul className="flex">
          {Array.from({ length: 4 }).map((_, indx) => {
            return (
              <li
                key={indx}
                onClick={() => handleSmallImgClick(indx + 1)}
                className={currentIndx === indx + 1 ? "imgActive" : ""}
              >
                <img
                  src={`./image-product-${indx + 1}-thumbnail.jpg`}
                  alt="Product Thumbnail Image"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ProductShowcase;
