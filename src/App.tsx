import './App.css'

function App() {
  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">⚡ NovaBuild</div>
        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <button className="btn-nav">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">🚀 Now in Beta — Join 10,000+ developers</div>
        <h1 className="hero-title">
          Build <span className="gradient-text">Faster.</span><br />
          Ship <span className="gradient-text">Smarter.</span>
        </h1>
        <p className="hero-sub">
          The all-in-one platform to design, develop, and deploy your next big idea —
          from zero to production in minutes.
        </p>
        <div className="hero-cta">
          <button className="btn-primary">Start for Free →</button>
          <button className="btn-ghost">Watch Demo ▶</button>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>10K+</span><p>Developers</p></div>
          <div className="divider" />
          <div className="stat"><span>99.9%</span><p>Uptime</p></div>
          <div className="divider" />
          <div className="stat"><span>150+</span><p>Integrations</p></div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Everything you need to ship</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Blazing Fast</h3>
            <p>Powered by Vite & edge infrastructure. Deploy globally in seconds.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure by Default</h3>
            <p>End-to-end encryption, role-based access, and SOC2 compliance built in.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered</h3>
            <p>Smart suggestions, auto-optimization, and code generation at your fingertips.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Analytics</h3>
            <p>Live dashboards, custom metrics, and instant alerts to stay on top.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready to build something amazing?</h2>
        <p>Join thousands of teams shipping faster with NovaBuild.</p>
        <button className="btn-primary large">Get Started Free →</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© 2026 NovaBuild. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
