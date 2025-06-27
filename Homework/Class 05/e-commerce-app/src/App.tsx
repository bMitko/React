import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/Home';
import AllProductsPage from './pages/AllProducts';
import './App.css'

function App() {
  return (
    <div className='global'>
    <ProductContextProvider>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />} />
        </Routes>
      </Router>
      <Footer/>
    </ProductContextProvider>
    </div>
  );
}


export default App
