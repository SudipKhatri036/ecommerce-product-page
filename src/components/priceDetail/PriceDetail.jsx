import styles from "../productdetail/ProductDetail.module.css";

function PriceDetail() {
  return (
    <div className={styles.priceDetailCont}>
      <div className={` flex`}>
        <p className={styles.price}>$125.00</p>
        <p className={styles.discountRate}>50%</p>
      </div>
      <p className={styles.mrp}>$250.00</p>
    </div>
  );
}

export default PriceDetail;
