import { useState } from 'react';
import { PawPrint, ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick, onNavClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div className="nav-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Left links — oculto no mobile */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a className="nav-link" href="#produtos" onClick={() => onNavClick('produtos')}>Produtos</a>
          <a className="nav-link" href="#contato" onClick={() => onNavClick('contato')}>Contato</a>
          <a className="nav-link" href="#favoritos" onClick={() => onNavClick('favoritos')}>Favoritos</a>
        </div>

        {/* Logo — centralizado no desktop, à esquerda no mobile */}
        <div
          className="nav-logo-wrap"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}
        >
          <PawPrint size={22} color="#0d6e6e" />
          <span style={{
            fontWeight: 900,
            fontSize: '22px',
            color: '#0d6e6e',
            fontFamily: 'Nunito, sans-serif',
          }}>Paraíso Pet</span>
        </div>

        {/* Right actions — oculto no mobile */}
        <div className="nav-desktop-actions" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button onClick={onCartClick} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
          }}>
            <ShoppingCart size={24} color="#0d6e6e" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: '#f5a623',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 800,
              }}>{cartCount}</span>
            )}
          </button>
          <button style={{
            background: 'none',
            border: '2px solid #0d6e6e',
            color: '#0d6e6e',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
            fontFamily: 'Nunito, sans-serif',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = '#0d6e6e'; e.target.style.color = 'white'; }}
          onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = '#0d6e6e'; }}
          >Entrar</button>
          <button style={{
            background: '#0d6e6e',
            border: 'none',
            color: 'white',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
            fontFamily: 'Nunito, sans-serif',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#0a5454'}
          onMouseLeave={e => e.target.style.background = '#0d6e6e'}
          >Cadastrar</button>
        </div>
      </div>
    </nav>
  );
}
