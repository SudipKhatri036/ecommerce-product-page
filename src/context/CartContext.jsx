import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

function CalculateTotalCartItem(items) {
  return items.reduce((acc, curVal) => acc + curVal.qty, 0);
}

function CartProvider({ children }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const [cartItemsList, setcartItemsList] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [qty, setQty] = useState(0);
  const [bigImg, setBigImg] = useState("./image-product-1.jpg");

  const totalCartItem = CalculateTotalCartItem(cartItemsList);

  function handleAddToCart() {
    if (!qty) return;

    if (cartItemsList.some((item) => item.id === 1)) {
      alert("Already in the Cart!");
      setQty(0);
      return;
    }
    setcartItemsList((item) => [
      ...item,
      {
        id: 1,
        productName: "Fall Limited Edition Sneakers",
        desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
        mrpPrice: 250.0,
        discount: 50,
        price: 125.0,
        qty,
      },
    ]);

    setQty(0);
  }

  function handleDelete(id) {
    const newCartList = cartItemsList.filter((item) => item.id !== id);
    setcartItemsList([...newCartList]);
  }

  function handleMenuOpen() {
    setIsNavActive(true);
  }
  function handleMenuClose() {
    setIsNavActive(false);
  }

  function handleCartOpen() {
    setIsCartOpen((isOpen) => !isOpen);
  }

  function handleConfirm() {
    toast.success("Order confirmed!");
    setcartItemsList([]);
  }

  function handleSmallImgClick(indx) {
    setBigImg(`./image-product-${indx}.jpg`);
  }

  return (
    <CartContext.Provider
      value={{
        bigImg,
        isNavActive,
        setIsNavActive,
        cartItemsList,
        setcartItemsList,
        handleMenuClose,
        handleMenuOpen,
        handleAddToCart,
        isCartOpen,
        handleCartOpen,
        handleDelete,
        handleConfirm,
        handleSmallImgClick,
        totalCartItem,
        qty,
        setQty,
        ToastContainer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) throw new Error("Cant Access outside provider");

  return context;
}

export { CartProvider, useCart, ToastContainer };
