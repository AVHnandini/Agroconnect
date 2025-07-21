import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerShop from './pages/CustomerShop';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MarketTrends from './pages/MarketTrends';
import CommunityForum from './pages/CommunityForum';
import SchemesPage from './pages/SchemesPage';
import DonationPage from './pages/DonationPage';
import GuidancePage from './pages/GuidancePage';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-green-50">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
                <Route path="/shop" element={<CustomerShop />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/market-trends" element={<MarketTrends />} />
                <Route path="/community" element={<CommunityForum />} />
                <Route path="/schemes" element={<SchemesPage />} />
                <Route path="/donate" element={<DonationPage />} />
                <Route path="/guidance" element={<GuidancePage />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;