function HowItWorks() {
  const items = [
    { title: "Join a Chapter", text: "Select a chapter based on your location and business category, where professionals from different industries collaborate without competition.", icon: "🏠" },
    { title: "Attend Meetings", text: "Join regular meetings to build trust, increase visibility, and develop strong professional relationships with members.", icon: "💬" },
    { title: "Exchange Referrals", text: "Give and receive business referrals within your chapter to grow your client base. 📈🤝", icon: "👥" },
    { title: "Track Growth", text: "Track referrals, conversions, and revenue through a dashboard that helps measure real business growth", icon: "✅" },
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
