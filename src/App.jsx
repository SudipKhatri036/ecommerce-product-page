import Header from "./components/header/Header";
import Main from "./components/main/Main";

import { useProductShow } from "../src/context/ProductShowContext";

import { useNav } from "./context/NavContext";
import Overlay from "./components/overlay/Overlay";

function App() {
  const { isNavActive } = useNav();
  const { showSlider } = useProductShow();

  return (
    <>
      <Header />
      <Main />
      {isNavActive || showSlider ? <Overlay classActive="active" /> : null}
    </>
  );
}

export default App;
