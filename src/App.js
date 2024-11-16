
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from './componentsPublic/MainPage';
import Profil from './componentsPublic/Profil';
import Products from './componentsPublic/Products';
import Cart from './componentsPublic/Cart';
import NavItem from './componentsPublic/NavItem';
function App() {
  return (
    <BrowserRouter>
    <NavItem/>
        <div className="App">
          <Routes>
              <Route  path="/home" element={<MainPage/>}/>
              <Route path="/profil" element={<Profil/>}/>
              <Route path ="/products"element={<Products/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
     
        </div>
    </BrowserRouter>
  )
  };

export default App;
