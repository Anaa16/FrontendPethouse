import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Home from "pages/Home";
import Catalog from "pages/Home/Catalog";
import Carrinho from "pages/Carrinho";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const BRoutes = () => (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element= {<Home />}>  </Route>
                <Route path="/products" element= {<Catalog />}>  </Route>
                <Route path="/admin" element= {<Admin />}>  </Route>
                <Route path="/carrinho" element= {<Carrinho />}>  </Route>

            </Routes>
        </BrowserRouter>



    );


export default BRoutes;