import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const initialCartItem = [
  {
    id: 1,
    productName: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    mrpPrice: 250.0,
    discountPer: 50,
    price: 125.0,
    qty: 1,
  },

  {
    id: 2,
    productName: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    mrpPrice: 250.0,
    discountPer: 50,
    price: 125.0,
    qty: 1,
  },

  {
    id: 3,
    productName: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    mrpPrice: 250.0,
    discountPer: 50,
    price: 125.0,
    qty: 1,
  },
];

function CalculateTotalCartItem(items) {
  return items.reduce((acc, curVal) => acc + curVal.qty, 0);
}

function CartProvider({ children }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const [cartItemsList, setcartItemsList] = useState(initialCartItem);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCartItem = CalculateTotalCartItem(cartItemsList);

  function handleMenuOpen() {
    setIsNavActive(true);
  }
  function handleMenuClose() {
    setIsNavActive(false);
  }

  function handleCartOpen() {
    setIsCartOpen((isOpen) => !isOpen);
  }

  return (
    <CartContext.Provider
      value={{
        isNavActive,
        setIsNavActive,
        cartItemsList,
        setcartItemsList,
        handleMenuClose,
        handleMenuOpen,
        isCartOpen,
        handleCartOpen,
        totalCartItem,
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

export { CartProvider, useCart };
