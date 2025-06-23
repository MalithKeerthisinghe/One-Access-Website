'use client';

import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import Header from '../components/header';
import Footer from '../components/footer';

export default function ContactUsPage() {
  // Refs for observing elements
  const heroRef = useRef(null);
  const getInTouchRef = useRef(null);
  const descriptionRef = useRef(null);
  const mapRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.1, // 10% of the element must be visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each element
    if (heroRef.current) observer.observe(heroRef.current);
    if (getInTouchRef.current) observer.observe(getInTouchRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (mapRef.current) observer.observe(mapRef.current);
    if (formRef.current) observer.observe(formRef.current);

    // Clean up observer on component unmount
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (getInTouchRef.current) observer.unobserve(getInTouchRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div className="contact-us-container">
      <Header />

      {/* Hero Section */}
      <section className="contact-hero-section" ref={heroRef}>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          {/* "Get in touch" heading and description with refs */}
          <h1 className="get-in-touch-heading" ref={getInTouchRef}>Get in touch</h1>
          <p className="contact-description" ref={descriptionRef}>
            Please feel free to get in touch with us by any convenient means (phone, WhatsApp, email,
            submit a contact form). We will be glad to answer your questions as soon as possible.
          </p>

          <div className="contact-content-wrapper">
            <div className="map-placeholder" ref={mapRef}>
              {/* Actual map image is now used from a different URL */}
              <img
                src="https://placehold.co/600x400/9b59b6/ffffff?text=New+Map+Location" // Updated image URL
                alt="Our Location Map"
                className="map-image"
              />
            </div>

            <div className="contact-form-section" ref={formRef}>
              <h2 className="form-heading">Connect With Your Next<br />Great Hire Today!</h2>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" placeholder="Placeholder" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your-name">Your Name</label>
                    <input type="text" id="your-name" placeholder="Placeholder" className="form-input" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="text" id="phone-number" placeholder="Placeholder" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Placeholder" className="form-input" />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="project-details">Project Details</label>
                  <textarea id="project-details" placeholder="Placeholder" className="form-textarea"></textarea>
                </div>
                <button type="submit" className="submit-button">GET CONSULTATION +</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .contact-us-container {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.6;
          background-color: #f8f9fa; /* Light gray background for the page */
          /* min-height: 100vh; Uncomment if the content is too short to scroll naturally */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* New Contact Hero Section */
        .contact-hero-section {
          background-color: #360065; /* Dark purple from header/other hero sections */
          color: white;
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding-bottom: 120px; /* Space for the curve to dip into */
          border-radius: 0 0 50% 50% / 0 0 100px 100px; /* Downward curve at bottom */
          box-shadow: inset 0 -10px 20px rgba(0,0,0,0.2);
          display: flex; /* Used flexbox to center content vertically */
          align-items: center;
          justify-content: center;
          min-height: 200px; /* Ensure sufficient height for the heading and curve */
          opacity: 0; /* Initial state for animation */
          transform: translateY(20px); /* Initial state for animation */
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .contact-hero-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-hero-content h1 {
          font-size: 3em;
          margin-bottom: 0;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .contact-section {
          padding: 60px 0; /* Adjusted padding as hero takes some space */
          margin-top: -80px; /* Overlap with the hero section curve */
          position: relative;
          z-index: 2; /* Ensure it's above the hero section */
          background-color: #f8f9fa;
        }

        .contact-content-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr; /* Info/Map slightly wider than form */
          gap: 60px;
          align-items: flex-start; /* Align content to the top */
        }

        .get-in-touch-heading {
          font-size: 2.8em;
          color: #33FF94; /* Green color from image */
          margin-bottom: 20px;
          font-weight: 700;
          text-align: left; /* Align to left as per original image */
          opacity: 0; /* Initial state for animation */
          transform: translateY(20px); /* Initial state for animation */
          transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s; /* Added delay */
        }

        .get-in-touch-heading.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-description {
          font-size: 1.1em;
          color: #555;
          margin-bottom: 40px;
          line-height: 1.7;
          opacity: 0; /* Initial state for animation */
          transform: translateY(20px); /* Initial state for animation */
          transition: opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s; /* Added delay */
        }

        .contact-description.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .map-placeholder {
          background-color: #e0e0e0;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          opacity: 0; /* Initial state for animation */
          transform: translateY(20px); /* Initial state for animation */
          transition: opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s; /* Added delay */
        }

        .map-placeholder.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-form-section {
          background-color: #ffffff;
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          opacity: 0; /* Initial state for animation */
          transform: translateY(20px); /* Initial state for animation */
          transition: opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s; /* Added delay */
        }

        .contact-form-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .form-heading {
          font-size: 1.8em;
          color: #4a00e0; /* Dark purple */
          margin-bottom: 30px;
          font-weight: 600;
          line-height: 1.3;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          flex: 1; /* Distribute space evenly */
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 0.9em;
          color: #666;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1em;
          color: #333;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          background-color: #f0f0f0; /* Light gray background for inputs */
          border-color: #d1c4e9; /* Light purple border */
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #aaa;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #4a00e0; /* Dark purple on focus */
          box-shadow: 0 0 0 3px rgba(74, 0, 224, 0.2);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical; /* Allow vertical resizing */
        }

        .form-group.full-width {
          width: 100%;
          margin-bottom: 30px;
        }

        .submit-button {
          background-color: #33FF94; /* Green button */
          color: #4a00e0; /* Dark purple text */
          border: none;
          padding: 15px 30px;
          border-radius: 30px; /* More rounded button */
          font-size: 1.1em;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          font-weight: 600;
          align-self: flex-start; /* Align button to start (left) */
        }

        .submit-button:hover {
          background-color: #1aff8c; /* Darker green on hover */
          transform: translateY(-2px);
        }

        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .contact-content-wrapper {
            grid-template-columns: 1fr; /* Stack columns on smaller screens */
            gap: 40px;
          }
          /* .contact-info no longer exists as a wrapper around map/description */
          .get-in-touch-heading {
            text-align: center; /* Center on smaller screens */
          }
          .submit-button {
            width: 100%; /* Full width button on smaller screens */
            align-self: center;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-content h1 {
            font-size: 2.2em;
          }
          .get-in-touch-heading {
            font-size: 2.2em; /* Ensure responsive size when moved */
          }
          .contact-description {
            font-size: 1em;
          }
          .form-heading {
            font-size: 1.5em;
          }
          .form-row {
            flex-direction: column; /* Stack form groups vertically */
            gap: 0; /* Remove gap when stacked */
          }
          .form-group {
            margin-bottom: 20px; /* Add space between stacked groups */
          }
        }

        @media (max-width: 480px) {
          .contact-form-section {
            padding: 25px;
          }
          .submit-button {
            padding: 12px 20px;
            font-size: 1em;
          }
        }
      `}</style>
    </div>
  );
}
