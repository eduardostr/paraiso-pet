import { useState } from 'react';
import { PawPrint, X, Eye, EyeOff } from 'lucide-react';

export default function RegisterModal({ onClose, onSwitchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-card" onClick={e => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose} aria-label="Fechar">
          <X size={18} />
        </button>

        <div className="auth-logo">
          <PawPrint size={26} color="#0d6e6e" />
          <span>Paraíso Pet</span>
        </div>

        <h2 className="auth-title">Crie sua conta</h2>
        <p className="auth-subtitle">Comece a comprar com facilidade</p>

        <form className="auth-form" onSubmit={e => e.preventDefault()}>
          <div className="auth-field">
            <label>Nome completo</label>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="auth-field">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label>Senha</label>
            <div className="auth-input-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="auth-eye"
                onClick={() => setShowPassword(o => !o)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="auth-field">
            <label>Confirmar senha</label>
            <div className="auth-input-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirm"
                placeholder="••••••••"
                value={form.confirm}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>
          </div>

          <button type="submit" className="auth-submit">Cadastrar</button>
        </form>

        <p className="auth-switch">
          Já tem conta?{' '}
          <button onClick={onSwitchToLogin}>Entre</button>
        </p>
      </div>
    </div>
  );
}
