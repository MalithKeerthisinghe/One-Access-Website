import React from 'react';

const ItPlusPage = () => {
  return (
    <div className="it-plus-container">
      {/* Hero Section - Assuming header is already present as per request */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>SIMPLIFYING IT WITH IT PLUS</h1>
          <p>Where Technology, Innovation, and Training Meet</p>
          <div className="hero-buttons">
            <button className="live-help-button">Live Help</button>
            <button className="contact-button">Contact</button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <h2>What We Do</h2>
        <p className="subtitle">Expert to Make IT Perfect</p>
        <div className="services-grid">
          <div className="service-card technology">
            {/* Image Placeholder - replace with actual images or SVGs */}
            <div className="card-image-placeholder"></div>
            <h3>Technology</h3>
          </div>
          <div className="service-card cloud">
            <div className="card-image-placeholder"></div>
            <h3>Cloud</h3>
          </div>
          <div className="service-card software">
            <div className="card-image-placeholder"></div>
            <h3>Software</h3>
          </div>
          <div className="service-card it-support">
            <div className="card-image-placeholder"></div>
            <h3>IT Support</h3>
          </div>
          <div className="service-card it-products">
            <div className="card-image-placeholder"></div>
            <h3>IT Products</h3>
          </div>
          <div className="service-card academic">
            <div className="card-image-placeholder"></div>
            <h3>Academic</h3>
          </div>
        </div>
      </section>

      {/* Who is IT Plus Section */}
      <section className="who-is-it-plus-section">
        <div className="who-is-content">
          <h2>Who is IT Plus</h2>
          <p>
            In today&#39;s fast-paced digital world, your business needs more
            than just technology—it needs a trusted partner. That&#39;s what
            IT Plus comes in. We deliver secure, scalable IT solutions
            including networking, Wi-Fi, VoIP, CCTV, and full IT support—
            tailored to your unique needs. With IT Plus, your business is
            ready to thrive, grow, and stay connected.
          </p>
          <button className="our-story-button">Our Story</button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Us</h2>
        <p className="subtitle">Your Trusted IT Partner in Sri Lanka</p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon-placeholder">👤</div> {/* Example icon */}
            <h3>Expert Team</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-placeholder">💡</div>
            <h3>Innovative Solutions</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-placeholder">⏰</div>
            <h3>24x7 Support</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-placeholder">⭐</div>
            <h3>Focus on Quality</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-placeholder">🎓</div>
            <h3>Certified Trainers</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-placeholder">💼</div>
            <h3>Job Placement</h3>
          </div>
        </div>
      </section>

      <style jsx>{`
        .it-plus-container {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Hero Section */
        .hero-section {
          background-color: #4a00e0; /* Dark purple/blue from image */
          color: white;
          padding: 80px 20px;
          text-align: center;
          position: relative; /* For the curve */
          overflow: hidden;
          padding-bottom: 120px; /* Space for the curve */
          /* Adjusted border-radius for a downward curve at the BOTTOM */
          border-radius: 0 0 50% 50% / 0 0 100px 100px; /* Horizontal 50%, Vertical 100px */
          box-shadow: inset 0 -10px 20px rgba(0,0,0,0.2); /* Adjusted shadow for bottom curve */
        }

        .hero-section h1 {
          font-size: 3em;
          margin-bottom: 10px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .hero-section p {
          font-size: 1.2em;
          margin-bottom: 30px;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .live-help-button,
        .contact-button {
          background-color: #28a745; /* Green */
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-size: 1em;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .contact-button {
          background-color: #6c757d; /* Gray */
        }

        .live-help-button:hover,
        .contact-button:hover {
          background-color: #218838; /* Darker green */
          transform: translateY(-2px);
        }

        .contact-button:hover {
          background-color: #5a6268; /* Darker gray */
        }

        /* What We Do Section */
        .what-we-do-section {
          text-align: center;
          padding: 80px 20px;
          background-color: #f8f9fa; /* Light gray */
          position: relative;
          z-index: 1; /* Ensure it's above the hero curve */
          margin-top: -60px; /* Pull it up to overlap the hero curve */
        }

        .what-we-do-section h2 {
          font-size: 2.5em;
          margin-bottom: 10px;
          color: #4a00e0;
          font-weight: 600;
        }

        .what-we-do-section .subtitle {
          font-size: 1.1em;
          color: #666;
          margin-bottom: 50px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background-color: #ffffff;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden; /* To contain background image */
          position: relative;
          color: white; /* Text color for cards */
          min-height: 200px;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          filter: brightness(0.6); /* Darken image */
          z-index: 0;
          border-radius: 15px;
        }

        .service-card.technology::before { background-image: url('https://placehold.co/600x400/3498db/ffffff?text=Technology'); }
        .service-card.cloud::before { background-image: url('https://placehold.co/600x400/9b59b6/ffffff?text=Cloud'); }
        .service-card.software::before { background-image: url('https://placehold.co/600x400/e67e22/ffffff?text=Software'); }
        .service-card.it-support::before { background-image: url('https://placehold.co/600x400/2ecc71/ffffff?text=IT%20Support'); }
        .service-card.it-products::before { background-image: url('https://placehold.co/600x400/f1c40f/ffffff?text=IT%20Products'); }
        .service-card.academic::before { background-image: url('https://placehold.co/600x400/e74c3c/ffffff?text=Academic'); }

        .service-card h3 {
          font-size: 1.8em;
          margin-top: 10px;
          position: relative;
          z-index: 1; /* Ensure text is above overlay */
        }

        .card-image-placeholder {
          width: 80px;
          height: 80px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3em;
          position: relative;
          z-index: 1;
        }

        /* Who is IT Plus Section */
        .who-is-it-plus-section {
          background-color: #4a00e0; /* Dark purple/blue from image */
          color: white;
          padding: 80px 20px;
          text-align: center;
          position: relative;
          margin-top: 80px; /* Space from previous section */
          border-radius: 15px; /* Rounded corners for the entire section */
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .who-is-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .who-is-it-plus-section h2 {
          font-size: 2.5em;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .who-is-it-plus-section p {
          font-size: 1.1em;
          margin-bottom: 30px;
          line-height: 1.8;
        }

        .our-story-button {
          background-color: white;
          color: #4a00e0; /* Dark purple/blue */
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 1em;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .our-story-button:hover {
          background-color: #f0f0f0;
          transform: translateY(-2px);
          color: #333;
        }

        /* Why Choose Us Section */
        .why-choose-us-section {
          text-align: center;
          padding: 80px 20px;
          background-color: #f8f9fa; /* Light gray */
          margin-top: 80px;
        }

        .why-choose-us-section h2 {
          font-size: 2.5em;
          margin-bottom: 10px;
          color: #4a00e0;
          font-weight: 600;
        }

        .why-choose-us-section .subtitle {
          font-size: 1.1em;
          color: #666;
          margin-bottom: 50px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .benefit-card {
          background-color: #ffffff;
          border-radius: 15px;
          padding: 30px 20px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 220px; /* Ensure consistent height */
          justify-content: center;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .icon-placeholder {
          width: 80px;
          height: 80px;
          background-color: #4a00e0; /* Dark purple/blue */
          border-radius: 50%;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3em;
          color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .benefit-card h3 {
          font-size: 1.4em;
          color: #333;
          font-weight: 500;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.2em;
          }

          .hero-section p {
            font-size: 1em;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 15px;
          }

          .what-we-do-section h2,
          .who-is-it-plus-section h2,
          .why-choose-us-section h2 {
            font-size: 2em;
          }

          .who-is-it-plus-section p {
            font-size: 0.95em;
          }

          .services-grid,
          .benefits-grid {
            grid-template-columns: 1fr; /* Stack on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default ItPlusPage;