function WhoShouldJoin() {
  const people = [
    {
      title: "Entrepreneurs",
      text: '"This platform transformed my business referrals"',
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      title: "Small Business Owners",
      text: '"The network has given me valuable connections"',
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    },
    {
      title: "Consultants",
      text: '"I’ve seen significant growth in my revenue"',
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
    },
    {
      title: "Startups",
      text: '"I’ve seen significant growth in my revenue"',
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140077.png",
    },
  ];

  return (
    <section className="section white-section" id="chapters">
      <h2>Who Should Join?</h2>
      <div className="card-grid">
        {people.map((person, index) => (
          <div className="person-card" key={index}>
            <img src={person.img} alt={person.title} />
            <h3>{person.title}</h3>
            <p>{person.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhoShouldJoin;