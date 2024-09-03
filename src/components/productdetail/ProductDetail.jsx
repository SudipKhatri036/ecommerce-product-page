import PriceDetail from "../priceDetail/PriceDetail";
import ProductAction from "../productAction/ProductAction";
import SingleProductDetail from "../singleProductDetail/SingleProductDetail";

import styles from "./ProductDetail.module.css";

function ProductDetail() {
  return (
    <div className={styles.productDetailCont}>
      <SingleProductDetail />
      <PriceDetail />
      <ProductAction />
    </div>
  );
}

export default ProductDetail;
