import styles from "../productdetail/ProductDetail.module.css";

function SingleProductDetail() {
  return (
    <>
      <h3>Sneaker Company</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className={styles.desc}>
        Thee low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
    </>
  );
}

export default SingleProductDetail;
