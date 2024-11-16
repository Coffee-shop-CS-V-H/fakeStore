
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from './componentsPublic/MainPage';
import Profil from './componentsPublic/Profil';
import Products from './componentsPublic/Products';
import NavItem from './componentsPublic/NavItem';

import MyCart from './componentsPublic/MyCart';

import Admin from './componentsAdmin/Admin';
import ProductsA from './componentsAdmin/ProductsA';
import Orders from './componentsAdmin/Orders';
import Users from './componentsAdmin/Users';

function App() {
  return (
    <BrowserRouter>
    <NavItem/>
        <div className="App">
          
          <Routes>
              <Route  path="/home" element={<MainPage/>}/>
              <Route path="/profil" element={<Profil/>}/>
              <Route path ="/products"element={<Products/>}/>
              <Route path="/cart" element={<MyCart/>}/>
              <Route path="/productsA" element={<ProductsA/>}/>
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders/>}/>



          </Routes>
     
        </div>
    </BrowserRouter>
  )
  };

export default App;
