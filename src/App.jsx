import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Overlay from "./components/overlay/Overlay";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Overlay />
    </>
  );
}

export default App;
