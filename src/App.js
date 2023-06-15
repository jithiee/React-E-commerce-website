import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBars from "./Component/Navigation/NavBars";
import HeadBg from "./Component/HeadBg";
import "./Component/Shoe.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Men from "./Component/Navigation/Men";
import Women from "./Component/Navigation/Women";
import Collecion from "./Component/Navigation/Collection";
import GiShoppingCart from "./Component/Navigation/GiShoppingCart";
import ImUser from "./Component/Navigation/ImUser";
import { useEffect, useState } from "react";
import { Product } from "./Component/ProductsDate";
import { context } from "./Component/Context";
import ViewPdct from "./Component/ViewPdct";
import Login from "./Component/Login";
import Singnin from "./Component/Singnin";
import Footer from "./Component/Footer";
import AdminNavbar from "./Component/AdminSetion/AdminNavbar";
import AdminEditdele from "./Component/AdminSetion/AdminEditdele";
import AddProduct from "./Component/AdminSetion/AddProduct";
import AdminEdit from "./Component/AdminSetion/AdminEdit";
import UserDetiles from "./Component/AdminSetion/UserDetiles";
import Search from "./Component/Navigation/Search";


function App() {
  const location = useLocation();
  const imageUrl = 'path/to/your/image.jpg'

  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("admin")) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [state, setState] = useState(Product);
  const [cart, setCart] = useState([]);
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState([]);
  const [userDatas, setUserDatas] = useState([]);
  const [search, setSearch] = useState([]);

  //destrutruring not assain
  
  const data = {
    state,
    setState,
    cart,
    setCart,
    auth,
    setAuth,
    email,
    setEmail,
    userDatas,
    setUserDatas,
    search,
    setSearch,
  };
  return (
    <div className="App">
      <>
        <context.Provider value={data}>
          {admin ? null : <NavBars />}


          <Routes>
            <Route path="/" element={<HeadBg />} />
            <Route path="/men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/collection" element={<Collecion />} />
            <Route path="/imuser" element={<ImUser />} />
            <Route path="/cart" element={<GiShoppingCart />} />
            <Route path="/viewpdct/:id" element={<ViewPdct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singin" element={<Singnin />} />
            <Route path="/admin" element={<AdminNavbar />} />

            <Route path="/search" element={<Search />} />


            {/* =============== admin setion =================================== */}

            <Route element={<AdminNavbar />}>
              <Route path="/admin/adminEdit" element={<AdminEditdele />} />
              <Route path="/admin/edit/:id" element={<AdminEdit />} />
              <Route path="/admin/adminAdd" element={<AddProduct />} />
              <Route path="/admin/adminDetile" element={<UserDetiles />} />
              
            </Route>
          </Routes>

          {admin ? null : <Footer />}
        </context.Provider>
      </>
    </div>
  );
}

export default App;
