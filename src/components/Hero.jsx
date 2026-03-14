function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Grow Your Business <br />
          Through Trusted Referrals
        </h1>

        <p>
          Join a structured networking platform to connect
          <br />
          and generate consistent revenue.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Join as Member</button>
          <button className="secondary-btn">Login</button>
        </div>

        <div className="hero-stats">
          <span>● 1000+ Active Members</span>
          <span>● Consistent Referrals</span>
          <span>● Proven Networking Model</span>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
          alt="Businessman"
        />
      </div>
    </section>
  );
}

export default Hero;