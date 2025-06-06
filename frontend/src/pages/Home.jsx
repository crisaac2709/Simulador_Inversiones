import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Simulador de Inversiones Inteligente</h1>
          <p className="hero-subtitle">Encuentra las mejores opciones de inversión según tu perfil</p>
          <button className="cta-button">Comenzar Simulación</button>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">¿Por qué elegir nuestra plataforma?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Análisis Comparativo</h3>
            <p>Compara múltiples productos de inversión en un solo lugar.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💸</div>
            <h3>Simulador Personalizado</h3>
            <p>Calcula rendimientos según el monto que deseas invertir.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Información Confiable</h3>
            <p>Datos actualizados de instituciones financieras reguladas.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">Cómo funciona</h2>
        <ol className="steps-list">
          <li>Ingresa el monto que deseas invertir</li>
          <li>Nuestro sistema analiza las mejores opciones</li>
          <li>Compara rendimientos y características</li>
          <li>¡Toma la mejor decisión para tu dinero!</li>
        </ol>
      </section>
    </div>
  );
};
