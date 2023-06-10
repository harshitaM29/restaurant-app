import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () =>{
      setIsOpen(true);
  }

  const closeCart = () => {
      setIsOpen(false);
  }
  return (
    <Fragment>
      {isOpen && <Cart onClose={closeCart} /> }
      <Header onOpen={openCart}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
