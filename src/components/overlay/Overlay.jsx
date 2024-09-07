import { useCart } from "../../context/CartContext";

function Overlay({ classActive = "" }) {
  return <div className={`overlay ${classActive}`}></div>;
}

export default Overlay;
