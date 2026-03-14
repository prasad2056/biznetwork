function Features() {
  const features = [
    { title: "Referral Management", text: "Choose Your Group", icon: "📩" },
    { title: "Meeting Management", text: "Build Relationships", icon: "🗂️" },
    { title: "Member Directory", text: "Grow Your Clients", icon: "🪪" },
    { title: "Performance Dashboard", text: "Monitor Success", icon: "📊" },
  ];

  return (
    <section className="section light-section" id="features">
      <h2>Key Features</h2>
      <div className="card-grid">
        {features.map((item, index) => (
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

export default Features;