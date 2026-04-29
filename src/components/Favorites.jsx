import { Heart } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Favorites({ favorites, onAddToCart, onToggleFavorite }) {
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  if (favorites.length === 0) return null;

  return (
    <section id="favoritos" className="section-pad" style={{
      padding: '60px 24px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '28px' }}>
        <Heart size={28} fill="#e53e3e" color="#e53e3e" />
        <h2 className="section-title" style={{
          fontWeight: 900,
          fontSize: '36px',
          color: '#f5a623',
          fontFamily: 'Nunito, sans-serif',
          margin: 0,
        }}>
          Meus Favoritos
        </h2>
      </div>

      <div className="products-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
      }}>
        {favoriteProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            isFavorite
          />
        ))}
      </div>
    </section>
  );
}
