import { useCart } from "../../context/CartContext";
import { useNav } from "../../context/NavContext";
import { useProductShow } from "../../context/ProductShowContext";
import Cart from "../cartcomp/Cart";
import Overlay from "../overlay/Overlay";
import ProductDetail from "../productdetail/ProductDetail";
import ProductShowcase from "../productShowcase/ProductShowcase";
import Slider from "../slider/Slider";

import styles from "./Main.module.css";
function Main() {
  const { isCartOpen, ToastContainer } = useCart();

  const { showSlider } = useProductShow();
  return (
    <main className={styles.main}>
      {isCartOpen && <Cart />}
      <section className="flex">
        <div className={styles.productImgCont}>
          <ProductShowcase />
        </div>

        <ProductDetail />
      </section>
      {showSlider ? <Slider /> : null}

      <ToastContainer
        position="top-right"
        autoClose={1000}
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
