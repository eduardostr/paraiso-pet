import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Favorites from './components/Favorites';
import CartModal from './components/CartModal';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const isAdding = !prev.includes(id);
      if (isAdding) {
        setTimeout(() => {
          document.getElementById('favoritos')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return isAdding ? [...prev, id] : prev.filter(f => f !== id);
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleNavClick = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onNavClick={handleNavClick}
      />
      <main style={{ flex: 1 }}>
        <Hero />
        <Products
          onAddToCart={addToCart}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        <Favorites
          favorites={favorites}
          onAddToCart={addToCart}
          onToggleFavorite={toggleFavorite}
        />
      </main>
      <Footer />
      <WhatsAppWidget />
      {cartOpen && (
        <CartModal
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
