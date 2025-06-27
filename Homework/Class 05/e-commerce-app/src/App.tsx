// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { Header } from './components/Header'
// import { ProductsList } from './pages/Products'
// import { Home } from './pages/Home'
// import { ProductsContextProvider } from './context/ProductContext'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'

// function App() {

//   return (
//     <div className='global'>
//     <BrowserRouter>
//     <ProductsContextProvider>
//     <Header />
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       {/* <Route path='/products' element={<AllProducts/>} /> */}
//       <Route path='/products' element={<ProductsList/>} />
//     </Routes>
//     </ProductsContextProvider>
//     </BrowserRouter>
//     </div>
//   )
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";
// import CategoryPage from "./pages/Home1";
// import AllProductsPage from "./pages/AllProducts1";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/Home';
import AllProductsPage from './pages/AllProducts';

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
