import hyImage from "../assets/hy.png";

function hy() {
  return (
    <section className="hy">

      <div className="hy-text">
        <h1>Grow Your Business Through Trusted Referrals</h1>

        <p>
          Join a powerful networking platform to connect with
          professionals and grow your business faster.
        </p>

        <button className="btn">Join Now</button>
      </div>

      <div className="hy-image">
        <img src={heroImage} alt="Business Networking" />
      </div>

    </section>
  );
}

export default hy;