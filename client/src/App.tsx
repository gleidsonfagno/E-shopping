import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProductDetails from "./pages/ProductDetails";
import AllProduct from "./pages/AllProduct";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useAppContext } from "./context/useAppContext";


function App() {
  const { showUserLogin } = useAppContext();
  return (
    <>
      <NavBar />

      { showUserLogin ? <Login /> :null }

      <div className="max-w-7xl mx-auto justify-center ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<AllProduct />} />
        <Route path="/product/:category/:id" element={<ProductDetails />} />
      </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
