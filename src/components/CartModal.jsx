import { ShoppingCart, X } from 'lucide-react';

export default function CartModal({ cart, onClose, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'flex-end',
    }} onClick={onClose}>
      <div
        className="cart-panel"
        style={{
          background: 'white',
          width: '380px',
          height: '100vh',
          padding: '28px 24px',
          overflowY: 'auto',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontWeight: 900, fontSize: '22px', color: '#0d6e6e', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingCart size={22} color="#0d6e6e" />
            Carrinho
          </h2>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', cursor: 'pointer', color: '#999',
            display: 'flex', alignItems: 'center', padding: '4px',
          }}>
            <X size={22} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#bbb' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <ShoppingCart size={60} color="#ddd" />
            </div>
            <p style={{ fontWeight: 700, fontSize: '16px' }}>Carrinho vazio</p>
          </div>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #eee',
              }}>
                <img src={item.image} alt={item.name} style={{
                  width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0,
                }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: '13px', color: '#333', marginBottom: '4px' }}>{item.name}</p>
                  <p style={{ fontWeight: 900, fontSize: '15px', color: '#0d6e6e' }}>
                    R$ {item.price.toFixed(2).replace('.', ',')}
                    <span style={{ fontWeight: 600, color: '#999', fontSize: '13px' }}> × {item.qty}</span>
                  </p>
                </div>
                <button onClick={() => onRemove(item.id)} style={{
                  background: '#fee2e2', border: 'none', color: '#e53e3e', borderRadius: '6px',
                  padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center',
                }}>
                  <X size={14} />
                </button>
              </div>
            ))}

            <div style={{ paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontWeight: 700, fontSize: '16px', color: '#555' }}>Total:</span>
                <span style={{ fontWeight: 900, fontSize: '22px', color: '#0d6e6e' }}>
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <button style={{
                width: '100%',
                background: '#f5a623',
                color: 'white',
                border: 'none',
                padding: '14px',
                borderRadius: '9999px',
                fontWeight: 900,
                fontSize: '16px',
                cursor: 'pointer',
                fontFamily: 'Nunito, sans-serif',
              }}>
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
