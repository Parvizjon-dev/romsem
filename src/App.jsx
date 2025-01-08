import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import CardGrid from './components/cardGrid/CardGrid';
import ProductSlider from './components/productSlider/ProductSlider';
import ExpandableText from './components/expandableText/ExpandableText';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/SideBar';
import PizzaPage from './pages/Pizza';
import SushiPage from './pages/Sushi';
import SetsPage from './pages/Sets';
import RollsPage from './pages/Rolls';
import WokPage from './pages/Wok';
import SaladsComingSoon from './pages/saladsComingSoon'
import SoupsComingSoon from './pages/soupsComingSoon'
import CartModal from './components/cartModal/cartModal'; // Импортируем модалку корзины

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Navbar onCartClick={toggleCart} /> {/* Передаем функцию открытия корзины */}
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <CardGrid />
              <ProductSlider />
            </>
          }
        />
        <Route path="/pizza" element={<PizzaPage />} />
        <Route path="/sets" element={<SetsPage />} />
        <Route path="/wok" element={<WokPage />} />
        <Route path="/rolls" element={<RollsPage />} />
        <Route path="/sushi" element={<SushiPage />} />
        <Route path="/salads-coming-soon" element={<SaladsComingSoon />} />
        <Route path="/soups-coming-soon" element={<SoupsComingSoon/>}/>
      </Routes>
      {isCartOpen && <CartModal onClose={toggleCart} />} {/* Модалка открывается при isCartOpen */}
      <ExpandableText />
      <Footer />
    </Router>
  );
};

export default App;
