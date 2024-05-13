/*       
             Cart App =>
                         * Using CSS ,Bootstram and React-Bootstrab For styling
                         * Using HTML,React.js and js for display data
                         * Using Json Server for Sending and getting data
                         * Using React-Router-Dom for Routing
                         * Using Sweetalert2
                         * Using React Redux and Redux-Tool-Kit for creating glopal state
                         * Using Asyncthunk,async and await   
                         * Using Font-awoesome icons                  
*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./Components/Appnavbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Scrolltop from './Components/Scrolltotop';
function App() {
  return (
    <>
      <AppNavbar />
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>

  );
}

export default App;
library.add(fab, fas, far)