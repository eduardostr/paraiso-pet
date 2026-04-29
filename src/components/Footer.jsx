import { PawPrint, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" style={{
      background: '#0d6e6e',
      color: 'white',
      padding: '48px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <PawPrint size={32} color="#f5a623" />
        </div>
        <h3 style={{
          fontWeight: 900,
          fontSize: '24px',
          color: '#f5a623',
          marginBottom: '24px',
          fontFamily: 'Nunito, sans-serif',
        }}>
          Entre em Contato
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
          <p style={{ fontSize: '14px', opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Phone size={14} /> Telefone: (xx) xxxxx-xxxx
          </p>
          <p style={{ fontSize: '14px', opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Mail size={14} /> Email: contato@paraisopet.com.br
          </p>
          <p style={{ fontSize: '14px', opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <MapPin size={14} /> Endereço: Rua dos Animais, 123 - Cidade Feliz
          </p>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '20px',
        }}>
          <p style={{ fontSize: '13px', opacity: 0.7 }}>
            © 2025 Paraíso Pet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
