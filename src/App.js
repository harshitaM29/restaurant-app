import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () =>{
      setIsOpen(true);
  }

  const closeCart = () => {
      setIsOpen(false);
  }
  return (
    <CartProvider>
      {isOpen && <Cart onClose={closeCart} /> }
      <Header onOpen={openCart}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
