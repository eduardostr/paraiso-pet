import { Heart, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function FavoritesModal({ favorites, onClose, onAddToCart, onToggleFavorite }) {
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div className="fav-overlay" onClick={onClose}>
      <div className="fav-panel" onClick={e => e.stopPropagation()}>

        <div className="fav-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Heart size={22} fill="#e53e3e" color="#e53e3e" />
            <h2 style={{ fontWeight: 900, fontSize: '22px', color: '#1a1a1a', margin: 0 }}>
              Meus Favoritos
            </h2>
            {favoriteProducts.length > 0 && (
              <span className="fav-count-badge">{favoriteProducts.length}</span>
            )}
          </div>
          <button className="fav-close" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="fav-empty">
            <Heart size={64} color="#e0e0e0" />
            <p>Nenhum favorito ainda</p>
            <span>Clique no coração de um produto para salvá-lo aqui</span>
          </div>
        ) : (
          <div className="fav-grid">
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
        )}
      </div>
    </div>
  );
}
