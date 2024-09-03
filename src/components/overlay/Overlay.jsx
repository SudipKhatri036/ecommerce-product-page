import { useCart } from "../../context/CartContext";

function Overlay() {
  const { isNavActive } = useCart();
  return <div className={`overlay ${isNavActive ? "active" : ""}`}></div>;
}

export default Overlay;
