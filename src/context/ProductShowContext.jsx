import { createContext, useContext, useState } from "react";

const ProductShowContext = createContext();

function ProductShowProvider({ children }) {
  const [bigImg, setBigImg] = useState("./image-product-1.jpg");
  const [currentIndx, setCurrentIndx] = useState(1);
  const [showSlider, setShowSlider] = useState(false);

  function handleSmallImgClick(indx) {
    setCurrentIndx(indx);
    setBigImg(`./image-product-${indx}.jpg`);
  }

  function handlePrev() {
    if (currentIndx <= 0) setCurrentIndx(4);

    setCurrentIndx((indx) => indx - 1);
    setBigImg(`./image-product-${currentIndx + 1}.jpg`);
  }

  function handleNext() {
    if (currentIndx >= 3) setCurrentIndx(1);

    setCurrentIndx((indx) => indx + 1);
    setBigImg(`./image-product-${currentIndx + 1}.jpg`);
  }

  return (
    <ProductShowContext.Provider
      value={{
        handleSmallImgClick,
        bigImg,
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
