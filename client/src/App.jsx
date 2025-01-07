import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Sale from "./pages/Sale"
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import RadytoShip from "./pages/RadytoShip";
import ProductDetail from "./pages/ProductDetail";
import Neckless from "./pages/Neckless";
import Mangtika from "./pages/Mangtika";
import LongNeckless from "./pages/LongNecless";
import ChokerSet from "./pages/ChokerSet";
import Mangalsutra from "./pages/Mangalsutra";
import Earring from "./pages/Earrings";
import Rings from "./pages/Rings";
import Bangles from "./pages/Bangles";
import Waistbands from "./pages/Waistbands";
import Search from "./pages/Search";
import ShopProduct from "./pages/ShopProduct";
import CheckOut from "./pages/CheckOut";
import CardSlider from "./pages/cardSlider";
import Pendent from "./pages/Pendant";
import CustomerDetails from "./admin/CtomerDetails";






const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="cart" element={<Cart />} />
            <Route path="radytoship" element={<RadytoShip />} />
            <Route path="sale" element={<Sale />} />
            <Route path="Pendant" element={<Pendent />} />
            <Route path="collecton" element={<Collection />} />
            <Route path="prodetail/:proid" element={<ProductDetail />} />
            <Route path="Necklass" element={<Neckless />} />
            <Route path="mangtika" element={<Mangtika />} />
            <Route path="LongNecklaces" element={<LongNeckless />} />
            <Route path="choker" element={<ChokerSet />} />
            <Route path="Mangalsutra" element={<Mangalsutra />} />
            <Route path="Earring" element={<Earring />} />
            <Route path="ring" element={<Rings />} />
            <Route path="bangle" element={<Bangles />} />
            <Route path="Waistbands" element={<Waistbands />} />
            <Route path="search" element={<Search />} />
            <Route path="checkout" element={<CheckOut/>} />
            <Route path="shop" element={<ShopProduct/>} />
            <Route path="cardslider" element={<CardSlider/>} />

          </Route>
          <Route>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/insertproduct" element={<InsertProduct />} />
            <Route path="customerdetails" element={<CustomerDetails/>} />
            {/* <Route path="cardslider" element={<CardSlider/>} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
