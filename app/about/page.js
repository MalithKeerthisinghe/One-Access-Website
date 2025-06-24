'use client'; // This page uses client-side components (Header, Footer, Lucide icons)

import Footer from '../components/footer'; // Adjust path if your components folder is different
import Header from '../components/header'; // Adjust path if your components folder is different

export default function AboutPage() {
  return (
    <>
      {/* Global Styles (applies to body and general elements) */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif; /* Using Inter font */
          color: #333;
          line-height: 1.6;
          background-color: #f8f9fa; /* Light gray background for the page */
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Inter', sans-serif;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Utility for image placeholders - not directly used in this page's content but useful */
        .image-placeholder {
          background-color: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #666;
          font-size: 1.2rem;
          border-radius: 8px;
        }
      `}</style>

      <Header />

      {/* Hero Section (About Us) */}
      <section className="hero-about-us">
        <div className="container">
          <div className="hero-content-about-us">
            <div className="hero-image-about-us">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Team collaboration"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x300/cccccc/000000?text=Image+Not+Found'; }}
              />
            </div>
            <div className="hero-text-about-us">
              <h1>About Us</h1>
              <p>
                OneAccess Technologies is a trusted team of experts specializing
                in Network Solutions, Wi-Fi Systems, VoIP, CCTV, and IT Support
                Services in Sri Lanka. Established in 2016 by Mr. Ali (Founder) and
                a team of experienced professionals, OneAccess is dedicated to enhancing business efficiency through modern
                network engineering, telecommunications, and project
                management to deliver cutting-edge solutions. Whether you
                need reliable network infrastructure, advanced communication systems, or
                related support and solutions, we&apos;re here to meet all your
                technology needs with reliability and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-content">
            <div className="mission-box">
              <h2>Mission</h2>
              <p>
                To empower businesses across Sri Lanka with reliable,
                innovative, and secure technology solutions. Fostering collaboration,
                IT, and CCTV systems -- tailored to drive growth,
                enhance productivity, and long-term success.
              </p>
            </div>
            <div className="vision-box">
              <h2>Vision</h2>
              <p>
                To become Sri Lanka&apos;s most trusted and innovative
                technology solutions partner, revolutionizing business
                digital infrastructure, seamless connectivity, and secure IT
                environments. We aim to set the benchmark for service
                excellence, reliability, and long-term technological growth
                across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working With Section */}
      <section className="working-with-section">
        <div className="container">
          <h2>Working With ItPlus</h2>
          <p className="working-with-subtitle">
            For your Network and Voice over IP projects, OneAccess will first do an initial consultation to listen to your needs and
            evaluate your business challenges. We will then design a specific, best-in-practice solution based on your needs and
            budget.
          </p>

          <div className="services-grid-working-with">
            <div className="service-card-working-with">
              <div className="service-icon-working-with">
                 <img src="/icons8-team.png" alt="Expert Team Icon" className="custom-service-icon" />
              </div>
              <h3>Expert Team</h3>
              <p>
                Our expert team gives you the right solution
                based on your needs and budget.
              </p>
            </div>
            <div className="service-card-working-with">
              <div className="service-icon-working-with">
                <img src="/icons8-service.png" alt="Service Icon" className="custom-service-icon" />
              </div>
              <h3>Service</h3>
              <p>
                We Deliver Exceptional Quality with
                Outstanding After-Service Support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        /* Hero Section (About Us) */
        .hero-about-us {
          background-color: #f0f2f5; /* Light grey background */
          padding: 4rem 0;
          margin-top: 0; /* Remove top margin */
        }

        .hero-content-about-us {
          display: flex;
          gap: 2rem;
          align-items: center;
          flex-wrap: wrap; /* Allow wrapping on smaller screens */
        }

        .hero-image-about-us {
          flex: 1;
          min-width: 300px; /* Minimum width for image */
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .hero-image-about-us img {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-text-about-us {
          flex: 2;
          min-width: 300px; /* Minimum width for text */
        }

        .hero-text-about-us h1 {
          font-size: 2.5rem;
          color: #4a00e0;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero-text-about-us p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
        }

        /* Mission Vision Section */
        .mission-vision-section {
          background-color: #ffffff;
          padding: 4rem 0;
          margin-top: 2rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .mission-vision-content {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .mission-box,
        .vision-box {
          background-color: #f0f2f5;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          flex: 1;
          min-width: 300px;
          text-align: center;
        }

        .mission-box h2,
        .vision-box h2 {
          font-size: 1.8rem;
          color: #4a00e0;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .mission-box p,
        .vision-box p {
          font-size: 1rem;
          color: #666;
          line-height: 1.7;
        }

        /* Working With Section */
        .working-with-section {
          background-color: #f8f9fa; /* Light gray */
          padding: 4rem 0;
          text-align: center;
          margin-top: 2rem;
        }

        .working-with-section h2 {
          font-size: 2.5rem;
          color: #4a00e0;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .working-with-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto 3rem auto;
          line-height: 1.7;
        }

        .services-grid-working-with {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .service-card-working-with {
          background-color: #ffffff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 6px 18px #7A4ADF;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .service-card-working-with:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .service-icon-working-with {
          background-color: #e0f7fa; /* Light blue */
          border-radius: 50%;
          padding: 1rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .custom-service-icon {
            width: 40px; /* Adjust size of your image icons */
            height: 40px; /* Adjust size of your image icons */
            object-fit: contain; /* Ensures the whole image is visible */
            filter: brightness(0.8) saturate(1.5); /* Example filter to make them pop, adjust as needed */
        }

        .service-card-working-with h3 {
          font-size: 1.5rem;
          color: #4a00e0;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .service-card-working-with p {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }

        /* Responsive adjustments for page sections */
        @media (max-width: 768px) {
          .hero-content-about-us {
            flex-direction: column;
            text-align: center;
          }

          .hero-text-about-us h1 {
            font-size: 2rem;
          }

          .hero-text-about-us p {
            font-size: 1rem;
          }

          .mission-vision-content {
            flex-direction: column;
          }

          .mission-box,
          .vision-box {
            min-width: unset;
            width: 100%;
          }

          .working-with-section h2 {
            font-size: 2rem;
          }

          .working-with-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
