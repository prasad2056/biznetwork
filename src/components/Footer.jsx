function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>📞Phone: +91 9876543210</p>
          <p>✉️ Email: info@biznetwork.com</p>
          <p>📍Office: Bangalore, India</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Chapters</p>
          <p>Contact</p>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>

      </div>

      <p className="copyright">
        © 2026 BizNetwork. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;