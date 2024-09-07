import { useEffect, useState } from "react";
import { useProductShow } from "../../context/ProductShowContext";
import BigImage from "../bigImage/BigImage";
import styles from "./ProductShowcase.module.css";

function ProductShowcase({ children }) {
  const { handleSmallImgClick, currentIndx } = useProductShow();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(function () {
    if (window.innerWidth <= 777) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <BigImage />
      <div className={styles.thumbnailImageCont}>
        {isMobile && children}
        <ul className={`flex ${isMobile ? "hide" : ""}`}>
          {Array.from({ length: 4 }).map((_, indx) => {
            return (
              <li
                key={indx}
                onClick={() => handleSmallImgClick(indx + 1)}
                className={currentIndx === indx + 1 ? "imgActive" : null}
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
