function Features() {
  const features = [
    { title: "Referral Management", text: "Create and share referrals easily, and track their progress from the first contact until the deal is successfully closed. ", icon: "📩" },
    { title: "Meeting Management", text: "View upcoming meetings, check agendas, and mark attendance to stay active and engaged in your chapter. ", icon: "🗂️" },
    { title: "Member Directory", text: "Access a verified list of chapter professionals and connect with members based on their business category and expertise.", icon: "🪪" },
    { title: "Performance Dashboard", text: "Track important metrics like referrals given, referrals received, business closed value, and attendance percentage.", icon: "📊" },
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
