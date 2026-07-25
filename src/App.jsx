import "./App.css";

function App() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, scalable, and responsive web applications using the latest technologies.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Secure cloud deployment, migration, and infrastructure management for businesses.",
    },
    {
      title: "AI & Data Analytics",
      description:
        "Transform data into actionable insights using AI, Machine Learning, and Analytics.",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">TechNova</h2>

        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Building the <span>Future</span> with Technology
          </h1>

          <p>
            We deliver innovative software solutions that empower businesses to
            grow faster through modern development, cloud technologies, and AI.
          </p>

          <button>Get Started</button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div>
          <h2>About Us</h2>

          <p>
            TechNova is an innovative IT company focused on delivering
            enterprise-grade software, cloud infrastructure, AI solutions, and
            digital transformation services. Our experienced team helps
            businesses achieve sustainable growth with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 TechNova IT Solutions. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;