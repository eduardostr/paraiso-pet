import { useState } from 'react';
import { Search } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

export default function Products({ onAddToCart, favorites, onToggleFavorite }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filtered = activeCategory === 'todos'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="produtos" className="section-pad" style={{ padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="section-title" style={{
        textAlign: 'center',
        fontWeight: 900,
        fontSize: '36px',
        color: '#f5a623',
        marginBottom: '28px',
        fontFamily: 'Nunito, sans-serif',
      }}>
        Nossos Produtos
      </h2>

      <div style={{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        marginBottom: '36px',
        flexWrap: 'wrap',
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="products-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
      }}>
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.includes(product.id)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
            <Search size={48} color="#ccc" />
          </div>
          <p style={{ fontSize: '18px', fontWeight: 700 }}>Nenhum produto encontrado</p>
        </div>
      )}
    </section>
  );
}
