import  React ,{ useState, Suspense } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import LazyLoading from "./components/UI/LazyLoading";

const CartProvider = React.lazy(() => import('./store/CartProvider'));
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Suspense
    fallback={
        <div className="lazyLoading">
            <LazyLoading />
        </div>  
      }>
      <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
    </CartProvider>
    </Suspense>
  );
}

export default App;
