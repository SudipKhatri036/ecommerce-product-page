import { useCart } from "../../context/CartContext";
import BigImage from "../bigImage/BigImage";
import Cart from "../cartcomp/Cart";
import ProductDetail from "../productdetail/ProductDetail";
import ThumbnailImages from "../thumbnailimage/ThumbnailImages";
import styles from "./Main.module.css";
function Main() {
  const { isCartOpen, ToastContainer } = useCart();
  return (
    <main className={styles.main}>
      {isCartOpen && <Cart />}
      <section className="flex">
        <div className={styles.productImgCont}>
          <BigImage />
          <ThumbnailImages />
        </div>

        <ProductDetail />
      </section>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={true}
        theme="light"
        transition:Bounce
      />
    </main>
  );
}

export default Main;
