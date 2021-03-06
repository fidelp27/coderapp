import Header from "./components/Header/header";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/itemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./screens/landing"
import ShopCart from "./screens/ShopCart";
import LogBar from "./components/logBar/logBar";
import LogIn from "./screens/Log/logIn";
import SignIn from "./screens/Log/signUp"

function App() {
  return (
    <div>            
      <BrowserRouter>
        <LogBar />
        <Header />                
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/category/:catId" element={<ItemListContainer />}></Route>
          <Route path="/product/:prodId" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<ShopCart />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>          
      </BrowserRouter>
    </div>
  );
}

export default App;
