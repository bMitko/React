import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";
import { Header } from './components/Navigation';
import { Footer } from './components/Footer';
import HomePage from './pages/Home';
import AllProductsPage from './pages/AllProducts';
import './App.css'
import { AddProduct } from "./pages/AddProduct";

function App() {

  return (
    <div className='global'>
    <ProductContextProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
        <Footer/>
      </Router>
    </ProductContextProvider>
    </div>
  );
}


export default App