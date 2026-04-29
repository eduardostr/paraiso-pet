import { useState } from 'react';
import { Heart, Share2, PawPrint, Check } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card fade-in">
      {/* Action icons */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}>
        <button
          className="icon-btn icon-btn-favorite"
          onClick={() => onToggleFavorite(product.id)}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart
            size={14}
            fill={isFavorite ? '#e53e3e' : 'none'}
            color={isFavorite ? '#e53e3e' : '#999'}
          />
        </button>
        <button className="icon-btn icon-btn-share" title="Compartilhar">
          <Share2 size={13} color="#999" />
        </button>
      </div>

      {/* Product image */}
      <div style={{
        width: '100%',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px',
        overflow: 'hidden',
        borderRadius: '10px',
        background: '#f9f9f9',
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          <PawPrint size={60} color="#ccc" />
        </div>
      </div>

      {/* Product info */}
      <div style={{ padding: '4px 0' }}>
        <h3 style={{
          fontWeight: 800,
          fontSize: '14px',
          color: '#0d6e6e',
          marginBottom: '8px',
          textAlign: 'center',
          lineHeight: 1.3,
          minHeight: '36px',
        }}>
          {product.name}
        </h3>

        <p style={{
          fontWeight: 900,
          fontSize: '20px',
          color: '#0d6e6e',
          textAlign: 'center',
          marginBottom: '12px',
        }}>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>

        <button
          className="btn-primary"
          onClick={handleAdd}
          style={{
            background: added ? '#2d9b5a' : '#0d6e6e',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          {added ? (
            <>
              <Check size={14} />
              Adicionado!
            </>
          ) : (
            'Adicionar ao Carrinho'
          )}
        </button>
      </div>
    </div>
  );
}
