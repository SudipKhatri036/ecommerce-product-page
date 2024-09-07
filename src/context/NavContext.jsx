import { createContext, useContext, useState } from "react";

const NavContext = createContext();

function NavProvider({ children }) {
  const [isNavActive, setIsNavActive] = useState(false);

  function handleMenuOpen() {
    setIsNavActive(true);
  }
  function handleMenuClose() {
    setIsNavActive(false);
  }

  return (
    <NavContext.Provider
      value={{
        isNavActive,
        setIsNavActive,
        handleMenuClose,
        handleMenuOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

function useNav() {
  const context = useContext(NavContext);
  if (context === undefined) throw new Error("Cant Access outside provider");
  return context;
}

export { NavProvider, useNav };
