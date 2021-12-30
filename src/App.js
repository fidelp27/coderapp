import Header from "./components/Header/header";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/itemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./screens/landing"
import Nosotros from "./screens/nosotros"
import Contacto from "./screens/contacto"
import ShopCart from "./screens/ShopCart";

function App() {
  return (
    <div>            
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/contact" element={<Contacto />}></Route>
          <Route path="/category/:catId" element={<ItemListContainer />}></Route>
          <Route path="/product/:prodId" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<ShopCart />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
