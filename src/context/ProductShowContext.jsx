import { createContext, useContext, useState } from "react";

const ProductShowContext = createContext();

function ProductShowProvider({ children }) {
  const [currentIndx, setCurrentIndx] = useState(1);
  const [showSlider, setShowSlider] = useState(false);

  function handleSmallImgClick(indx) {
    setCurrentIndx(indx);
  }

  function handlePrev() {
    if (currentIndx == 1) setCurrentIndx(5);

    setCurrentIndx((indx) => indx - 1);
  }

  function handleNext() {
    if (currentIndx == 4) setCurrentIndx(0);

    setCurrentIndx((indx) => indx + 1);
  }

  return (
    <ProductShowContext.Provider
      value={{
        handleSmallImgClick,

        handleNext,
        handlePrev,
        showSlider,
        setShowSlider,
        currentIndx,
      }}
    >
      {children}
    </ProductShowContext.Provider>
  );
}

function useProductShow() {
  const context = useContext(ProductShowContext);
  if (context === undefined) throw new Error("Cant Access outside provider");
  return context;
}

export { useProductShow, ProductShowProvider };
