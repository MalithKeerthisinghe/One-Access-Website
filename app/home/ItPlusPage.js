const ItPlusPage = () => {
  return (
    <div className="it-plus-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>SIMPLIFYING IT WITH </h1>
          <img src="/logo_r.png" alt="aaa" className="it-plus-logo" />
          <p>Where Technology, Innovation, and Training Meet</p>
          <br />
          <div className="hero-buttons">
            <button className="live-help-button">Live Help</button>
            <button className="contact-button">Contact</button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <h2>------------------------ What We Do --------------------</h2>,
        <p className="subtitle">Expert to Make IT Perfect</p>
        <div className="services-grid">
          <div className="service-card technology">
            <h3>Technology</h3>
            <div className="card-image-placeholder"></div>
          </div>
          <div className="service-card cloud">
            <h3>Cloud</h3>
            <div className="card-image-placeholder"></div>
          </div>
          <div className="service-card software">
            <h3>Software</h3>
            <div className="card-image-placeholder"></div>
          </div>
          <div className="service-card it-support">
            <h3>IT Support</h3>
            <div className="card-image-placeholder"></div>
          </div>
          <div className="service-card it-products">
            <h3>IT Products</h3>
            <div className="card-image-placeholder"></div>
          </div>
          <div className="service-card academic">
            <h3>Academic</h3>
            <div className="card-image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Who is IT Plus Section */}
      <section className="who-is-it-plus-section">
        <div className="who-is-content">
          <div className="title-row">
            <h2>
              Who is
              <img
                src="/logo_r.png"
                alt="IT Plus Logo"
                className="who-is-logo"
                style={{ width: "100px", height: "100px", marginLeft: "10px" }}
              />
            </h2>
          </div>
          <p>
            In today&apos;s fast-paced digital world, your business needs more
            than just technology—it needs a trusted partner. That&apos;s what IT
            Plus comes in. We deliver secure, scalable IT solutions including
            networking, Wi-Fi, VoIP, CCTV, and full IT support— tailored to your
            unique needs. With IT Plus, your business is ready to thrive, grow,
            and stay connected.
          </p>
          <button className="our-story-button">Our Story</button>
          {/* <div className="image-row">
            <img src="/Vector11.png" alt="Vector 11" className="vector-image" />
            <img src="/Vector12.png" alt="Vector 12" className="vector-image" />
          </div> */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Us</h2>
        <p className="subtitle">Your Trusted IT Partner in Sri Lanka</p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon-wrapper">
              <img
                src="/expert-team.png"
                alt="Expert Team Icon"
                className="benefit-icon"
              />
            </div>
            <h3>Expert Team</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-wrapper">
              <img
                src="/innovative-solutions.png"
                alt="Innovative Solutions Icon"
                className="benefit-icon"
              />
            </div>
            <h3>Innovative Solutions</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-wrapper">
              <img
                src="/24x7-support.png"
                alt="24x7 Support Icon"
                className="benefit-icon"
              />
            </div>
            <h3>24x7 Support</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-wrapper">
              <img
                src="/focus-on-quality.png"
                alt="Focus on Quality Icon"
                className="benefit-icon"
              />
            </div>
            <h3>Focus on Quality</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-wrapper">
              <img
                src="/certified-trainers.png"
                alt="Certified Trainers Icon"
                className="benefit-icon"
              />
            </div>
            <h3>Certified Trainers</h3>
          </div>
          <div className="benefit-card">
            <div className="icon-wrapper">
              <img
                src="/job-placement.png"
                alt="Job Placement Icon"
                className="benefit-icon"
              />
            </div>
            <h3>Job Placement</h3>
          </div>
        </div>
      </section>

      {/* Our Clients In Success Section - NEW SECTION */}
      <section className="clients-section">
        <div className="clients-container">
          <h2>Our Clients In Success</h2>
          <div className="clients-grid">
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/durdans.png"
                alt="Durdans Hospital Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/vision-care.png"
                alt="Vision Care Optical Services Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/cinnamon-hotels.png"
                alt="Cinnamon Hotels Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/client4.png"
                alt="Client 4 Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/client5.png"
                alt="Client 5 Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/client6.png"
                alt="Client 6 Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/clevr.png"
                alt="Clevr Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/eboola.png"
                alt="Eboola Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/isi.png"
                alt="ISI Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/tradarea.png"
                alt="Tradarea Logo"
                className="client-logo"
              />
            </div>
            <div className="client-logo-wrapper">
              <img
                src="/images/clients/firewall.png"
                alt="Firewall.lk Logo"
                className="client-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News and Updates Section - NEW SECTION */}
      <section className="news-updates-section">
        <div className="news-updates-container">
          <h2>News and Updates</h2>
          <div className="news-cards-grid">
            <div className="news-card">
              <img src="/images/news/news-placeholder.png" alt="News Image" className="news-image" />
              <div className="news-content">
                <h3>IFS Appoints Shown Jusiter as President, Energy & Resources</h3>
                <button className="read-article-button">Read article</button>
              </div>
            </div>
            <div className="news-card">
              <img src="/images/news/news-placeholder.png" alt="News Image" className="news-image" />
              <div className="news-content">
                <h3>IFS Appoints Shown Jusiter as President, Energy & Resources</h3>
                <button className="read-article-button">Read article</button>
              </div>
            </div>
            <div className="news-card">
              <img src="/images/news/news-placeholder.png" alt="News Image" className="news-image" />
              <div className="news-content">
                <h3>IFS Appoints Shown Jusiter as President, Energy & Resources</h3>
                <button className="read-article-button">Read article</button>
              </div>
            </div>
          </div>
          <button className="show-more-button">Show More News</button>
        </div>
        {/* Wavy background elements */}
        <div className="wavy-bottom-left"></div>
        <div className="wavy-bottom-right"></div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div> {/* You can use actual star icons or font awesome if available */}
              <p>
                Yet preference connection unpleasant yet melancholy but end appearance.
                And excellence partiality estimating terminated day everything.
              </p>
              <h4>Sabo Mastiles</h4>
              <span>Founder @ Rolex</span>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                Yet preference connection unpleasant yet melancholy but end appearance.
                And excellence partiality estimating terminated day everything.
              </p>
              <h4>Sam</h4>
              <span>Founder @ Migalka</span>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                Yet preference connection unpleasant yet melancholy but end appearance.
                And excellence partiality estimating terminated day everything.
              </p>
              <h4>Mansur</h4>
              <span>Founder @ Google</span>
            </div>
          </div>
          <div className="get-in-touch-text">
            <p>Get in touch with us. Our experienced team is happily waiting to hear from you</p>
          </div>
          <button className="send-inquiry-button">Send Us an Inquiry</button>
        </div>
      </section>

      <style jsx>{`
        .it-plus-container {
          font-family: "Inter", sans-serif;
          color: #333;
          line-height: 1.6;
          margin: 0;
          padding: 0;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #7a4adf 0%, #360065 100%);
          color: white;
          width: 106%;
          padding: 180px 10px 10px 300px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: 0 0 50% 50% / 0 0 100px 100px;
          box-shadow: inset 0 -10px 20px rgba(0, 0, 0, 0.2);
        }

        .hero-content {
          max-width: 100%;
          margin: 0 auto;
          padding: 100px 20px 50px;
        }

        .hero-section h1 {
          font-size: 3rem;
          margin-bottom: 10px;
          letter-spacing: 1px;
          font-weight: 700;
          margin-top: 0;
          font-family: "Outfit";
        }

        .hero-section p {
          font-size: 1.4rem;
          margin-bottom: 30px;
          font_family: "outfit";
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          height: 50px;
          width: 100;
          gap: 20px;
          flex-wrap: wrap;
        }

        .live-help-button,
        .contact-button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-weight: 500;
        }

        .contact-button {
          background-color: #6c757d;
        }

        .live-help-button:hover {
          background-color: #218838;
          transform: translateY(-2px);
        }

        .contact-button:hover {
          background-color: #5a6268;
          transform: translateY(-2px);
        }

        /* What We Do Section */
        .what-we-do-section {
          line-height: 1;
          text-align: center;
          text-family: "Outfit";
          font-size: 2rem;
          padding: 80px 20px;
          background-color: #f8f9fa;
          position: relative;
          z-index: 1;
          margin-top: -60px;
        }

        .what-we-do-section h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #4a00e0;
          font-weight: 600;
          margin-top: 0;
        }

        .what-we-do-section .subtitle {
          font-size: 1.6rem;
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
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          position: relative;
          color: white;
          min-height: 200px;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("https://images.unsplash.com/photo-1518770660439-4636190af475")
            center/cover;
          filter: brightness(0.6);
          z-index: 0;
          border-radius: 15px;
        }

        .service-card.technology::before {
          background: url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b")
            center/cover;
          // background-image: url('/images/technology-bg.png');
        }
        .service-card.cloud::before {
          background: url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5")
            center/cover;
        }
        .service-card.software::before {
          background: url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6")
            center/cover;
        }
        .service-card.it-support::before {
          background: url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7")
            center/cover;
        }
        .service-card.it-products::before {
          background: url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e")
            center/cover;
        }
        .service-card.academic::before {
          background: url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158")
            center/cover;
        }

        .service-card h3 {
          font-size: 1.8rem;
          margin-top: 0px;
          position: relative;
          z-index: 1;
          font-weight: 600;
          margin-bottom: 20;
        }

        .card-image-placeholder {
          width: 60px;
          height: 60px;
          background-color: #440b44;

          border-radius: 50%;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          // font-size: 2rem;
          position: relative;
          z-index: 1;
          backdrop-filter: blur(10px);
        }

        .card-image-placeholder::after {
          content: "➠"; /* Green right arrow */
          font-size: 2.2rem;
          color: rgb(
            20,
            218,
            99
          ); /* Match the green arrow color from the design */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Who is IT Plus Section */
        .who-is-it-plus-section {
          background: linear-gradient(135deg, #7a4adf 0%, #360065 100%);
          color: white;

          padding: 80px 20px 100px 20px;
          text-align: center;
          position: relative;
          margin: 20px 10px;
          border-radius: 15px;
          max-width: 1500px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .who-is-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px; /* Space between h2 and logo */
          margin-bottom: 20px; /* Space before the paragraph */
        }

        .who-is-it-plus-section h2 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: 600;
          margin-top: 0;
        }

        .who-is-it-plus-section p {
          font-size: 1.3rem;
          font-family: "Outfit";
          font-weight: 100;
          margin-bottom: 30px;
          line-height: 1.8;
          opacity: 0.9;
        }

        .our-story-button {
          background-color: #33ff94;
          color: #15145f;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-weight: 500;
        }

        .our-story-button:hover {
          background-color: #f0f0f0;
          transform: translateY(-2px);
          color: #333;
        }

        .image-row {
          display: flex;
          justify-content: center;
          gap: 20px; /* Space between the two images */
          margin-top: 20px; /* Space after button */
        }

        .vector-image {
          height: 50px; /* Adjust height as needed */
          width: auto; /* Maintain aspect ratio */
          display: inline-block;
          vertical-align: between;
          border-radius: 0; /* Ensure no circular shape */
        }

        /* Why Choose Us Section */
        .why-choose-us-section {
          text-align: center;
          padding: 80px 20px;
          background-color: #f8f9fa;
          margin-top: 80px;
        }

        .why-choose-us-section h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #4a00e0;
          font-weight: 600;
          margin-top: 0;
        }

        .why-choose-us-section .subtitle {
          font-size: 1.4rem;
          color: #000000;
          margin-bottom: 50px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(20px, 1fr)
          ); /* Adjusted minmax for better fit */
          gap: 10px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .benefit-card {
          background: linear-gradient(135deg, #7a4adf 0%, #360065 100%);
          border-radius: 15px;
          padding: 1px 1px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          min-height: 420px;
          width: 200px;
          justify-content: center;
          cursor: pointer;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          /* Gradient background as per the design */
          background: radial-gradient(circle at top left, #a862f9, #7a4adf);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden; /* Ensures the image doesn't spill out */
        }

        .benefit-icon {
          /* Specific class for the image within the wrapper */
          width: 50px; /* Adjust size of the actual icon image */
          height: 50px; /* Adjust size of the actual icon image */
          object-fit: contain; /* Ensures the whole icon is visible without cropping */
          z-index: 1; /* Make sure the icon is above the background */
          filter: brightness(
            1.2
          ); /* Adjust brightness if icons appear too dark on gradient */
        }

        .benefit-card h3 {
          font-size: 1.4rem;
          color: white;
          font-weight: 500; /* Medium weight, adjust as needed */
          margin: 0;
        }

        .clients-section {
          background-color: #f8f9fa; /* Light background for the section */
          padding: 80px 20px;

          text-align: center;
          margin-top: 50px; /* Space from the section above */
        }

        .clients-container {
          background-color: #ffffff; /* White card-like background for the content */
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Soft shadow */
          max-width: 1350px;
          margin: 0 auto;
          padding: 80px 50px;
        }

        .clients-section h2 {
          font-size: 2.5rem;
          color: #4a00e0; /* Similar to your other headings */
          margin-bottom: 50px; /* Space between title and logos */
          font-weight: 600;
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(120px, 1fr)
          ); /* Adjust minmax for logo size */
          gap: 30px; /* Space between logos */
          justify-items: center; /* Center logos within their grid cells */
          align-items: center; /* Vertically center logos */
        }

        .client-logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          /* If you want a background/border around each logo, add styles here */
          /* For now, just ensure the image fills the space and is properly sized */
          width: 100%; /* Take full width of grid cell */
          height: 80px; /* Fixed height for consistency */
          overflow: hidden; /* Hide anything outside */
        }

        .client-logo {
          max-width: 100%; /* Ensure logo fits in wrapper */
          max-height: 80px; /* Ensure logo fits in wrapper */
          object-fit: contain; /* Contain the entire image within the bounds */
          opacity: 0.7; /* Slightly faded as per design */
          transition: opacity 0.3s ease;
        }

        .client-logo:hover {
          opacity: 1; /* Full color on hover */
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.2rem;
          }

          .hero-section p {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 15px;
            align-items: center;
          }

          .live-help-button,
          .contact-button {
            width: 200px;
          }

          .what-we-do-section h2,
          .who-is-it-plus-section h2,
          .why-choose-us-section h2 {
            font-size: 2rem;
          }

          .who-is-it-plus-section p {
            font-size: 0.95rem;
          }

          .services-grid,
          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .who-is-it-plus-section {
            margin: 40px 10px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 60px 15px 100px;
          }

          .what-we-do-section,
          .why-choose-us-section {
            padding: 60px 15px;
          }

          .who-is-it-plus-section {
            padding: 60px 15px;
          }
        }
           /* NEW SECTION: News and Updates */
        .news-updates-section {
          background-color: #f8f9fa; /* Light background for the section */
          padding: 80px 20px 0; /* Padding-bottom reduced as wavy elements will define bottom space */
          text-align: center;
          position: relative; /* For absolute positioning of wavy elements */
          overflow: hidden; /* Important for wavy elements */
        }

        .news-updates-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 80px; /* Space above the wavy background */
        }

        .news-updates-section h2 {
          font-size: 2.5rem;
          color: #4a00e0;
          margin-bottom: 50px;
          font-weight: 600;
        }

        .news-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 50px; /* Space between cards and 'Show More' button */
          justify-content: center; /* Center cards horizontally if not enough to fill a row */
        }

        .news-card {
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          overflow: hidden; /* Ensures image corners are rounded with card */
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .news-image {
          width: 100%;
          height: 200px; /* Fixed height for consistent card appearance */
          object-fit: cover; /* Cover the area, cropping if necessary */
          border-radius: 15px 15px 0 0; /* Rounded top corners */
        }

        .news-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1; /* Allows content to take up remaining space */
          justify-content: space-between; /* Pushes button to the bottom */
        }

        .news-content h3 {
          font-size: 1.2rem;
          color: #333;
          margin-top: 0;
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 600;
        }

        .read-article-button {
          background-color: #33FF94; /* Green color from your design */
          color: #15145F; /* Dark blue from your design */
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-weight: 500;
          align-self: flex-start; /* Align button to the left */
        }

        .read-article-button:hover {
          background-color: #2cdb85; /* Slightly darker green on hover */
          transform: translateY(-1px);
        }

        .show-more-button {
          background-color: #33FF94; /* Green color from your design */
          color: #15145F; /* Dark blue from your design */
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-weight: 500;
          margin-top: 30px; /* Space above the button */
        }

        .show-more-button:hover {
          background-color: #2cdb85;
          transform: translateY(-2px);
        }

        /* Wavy background elements */
        .wavy-bottom-left,
        .wavy-bottom-right {
          position: absolute;
          bottom: -150px; /* Adjust to move the wave up/down */
          width: 600px; /* Adjust size of the wave */
          height: 300px; /* Adjust height of the wave */
          background: linear-gradient(135deg, #33FF94 0%, #00C6FF 100%); /* Example gradient */
          border-radius: 50%; /* Makes it circular */
          opacity: 0.7; /* Adjust transparency */
          filter: blur(50px); /* Soften the edges */
          z-index: 0; /* Ensure it's behind content */
        }

        .wavy-bottom-left {
          left: -200px; /* Position to the left */
        }

        .wavy-bottom-right {
          right: -200px; /* Position to the right */
        }


        /* Responsive Design updates */
        @media (max-width: 768px) {
          /* ... existing media queries ... */

          .news-cards-grid {
            grid-template-columns: 1fr; /* Stack news cards on small screens */
            padding: 0 15px; /* Add some padding for the grid */
          }

          .wavy-bottom-left,
          .wavy-bottom-right {
            width: 400px; /* Smaller waves on mobile */
            height: 200px;
            bottom: -100px;
          }

          .wavy-bottom-left {
            left: -150px;
          }

          .wavy-bottom-right {
            right: -150px;
          }
        }

        @media (max-width: 480px) {
          /* ... existing media queries ... */

          .news-updates-section {
            padding: 40px 15px 0;
          }

          .news-updates-section h2 {
            font-size: 2rem;
          }

          .news-card h3 {
            font-size: 1rem;
          }

          .read-article-button,
          .show-more-button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
          /* NEW SECTION: What Our Clients Say (Testimonials) */
        .testimonials-section {
          background-color: #f8f9fa; /* Light background for the section */
          padding: 80px 20px;
          text-align: center;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-section h2 {
          font-size: 2.5rem;
          color: #4a00e0;
          margin-bottom: 50px;
          font-weight: 600;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
          justify-content: center;
        }

        .testimonial-card {
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          padding: 30px;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e0e0e0; /* Subtle border as seen in the design */
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px #7A4ADF;
        }

        .testimonial-card .stars {
          color: #ffc107; /* Gold color for stars */
          font-size: 1.5rem;
          margin-bottom: 15px;
          letter-spacing: 2px; /* Space out the stars a bit */
        }

        .testimonial-card p {
          font-size: 1rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .testimonial-card h4 {
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .testimonial-card span {
          font-size: 0.9rem;
          color: #888;
        }

        .get-in-touch-text {
          margin-top: 50px;
          margin-bottom: 30px;
        }

        .get-in-touch-text p {
          font-size: 1.2rem;
          color: #333;
          font-weight: 500;
        }

        .send-inquiry-button {
          background-color: #33FF94; /* Green color from your design */
          color: #15145F; /* Dark blue from your design */
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-weight: 500;
        }

        .send-inquiry-button:hover {
          background-color: #2cdb85;
          transform: translateY(-2px);
        }

        /* Responsive Design updates */
        @media (max-width: 768px) {
          /* ... existing media queries ... */

          .testimonials-section h2 {
            font-size: 2rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr; /* Stack testimonials on small screens */
            padding: 0 15px;
          }

          .get-in-touch-text p {
            font-size: 1rem;
            padding: 0 15px;
          }
        }

        @media (max-width: 480px) {
          /* ... existing media queries ... */

          .testimonials-section {
            padding: 60px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ItPlusPage;
