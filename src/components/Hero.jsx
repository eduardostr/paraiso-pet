export default function Hero() {
  return (
    <section style={{ width: '100%', lineHeight: 0 }}>
      <picture>
        <source media="(max-width: 768px)" srcSet="/Banner_Mobile.png" />
        <img
          src="/Banner.png"
          alt="Paraíso Pet"
          style={{ width: '100%', display: 'block' }}
        />
      </picture>
    </section>
  );
}
