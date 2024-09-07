import styles from "./Slider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ProductShowcase from "../productShowcase/ProductShowcase";
import { useProductShow } from "../../context/ProductShowContext";

function Slider() {
  const { handleNext, handlePrev, setShowSlider } = useProductShow();

  return (
    <>
      <div className={styles.sliderCont}>
        <div className={styles.sliderFlx}>
          <ImCross
            className={styles.sliderClose}
            onClick={() => setShowSlider(false)}
          />
          <FaChevronLeft
            className={`${styles.btnSlide} prev-btn`}
            onClick={handlePrev}
          />
          <ProductShowcase />
          <FaChevronRight
            className={`${styles.btnSlide} next-btn`}
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
}

export default Slider;
