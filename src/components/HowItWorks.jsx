function HowItWorks() {
  const items = [
    { title: "Join a Chapter", text: "Choose Your Group", icon: "🏠" },
    { title: "Attend Meetings", text: "Build Relationships", icon: "💬" },
    { title: "Exchange Referrals", text: "Grow Your Clients", icon: "👥" },
    { title: "Track Growth", text: "Monitor Success", icon: "✅" },
  ];

  return (
    <section className="section white-section">
      <h2>How It Works</h2>
      <div className="card-grid">
        {items.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;