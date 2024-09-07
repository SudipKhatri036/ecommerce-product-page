import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useProductShow } from "../../context/ProductShowContext";
import Cart from "../cartcomp/Cart";
import ProductDetail from "../productdetail/ProductDetail";
import ProductShowcase from "../productShowcase/ProductShowcase";
import Slider from "../slider/Slider";

import styles from "./Main.module.css";
function Main() {
  const { isCartOpen, ToastContainer } = useCart();
  const { handleNext, handlePrev } = useProductShow();

  const { showSlider } = useProductShow();
  return (
    <main className={styles.main}>
      {isCartOpen && <Cart />}
      <section className="flex">
        <div className={styles.productImgCont}>
          <ProductShowcase>
            <FaChevronLeft
              className={`btnSlide mainPrevBtn`}
              onClick={handlePrev}
            />
            <FaChevronRight
              className={`btnSlide mainNextBtn`}
              onClick={handleNext}
            />
          </ProductShowcase>
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
