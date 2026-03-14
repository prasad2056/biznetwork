function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">

      <h2>What Our Members Say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="member"/>
          <p>"Great platform for business growth."</p>
          <h4>Rahul Sharma</h4>
          <span>Entrepreneur</span>
        </div>

        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="member"/>
          <p>"Trusted networking community."</p>
          <h4>Priya Reddy</h4>
          <span>Business Owner</span>
        </div>

        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="member"/>
          <p>"Helped me generate many referrals."</p>
          <h4>Arjun Patel</h4>
          <span>Consultant</span>
        </div>

      </div>

    </section>
  )
}

export default Testimonials
