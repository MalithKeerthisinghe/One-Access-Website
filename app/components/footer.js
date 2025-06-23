'use client'; // This component uses client-side features (lucide-react)

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Added Instagram

export default function Footer() {
  return (
    <footer className="footer">
      {/* Removed the footer-wave div as the image will be the background */}

      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>IT PLUS</h3>
            <p>
              Digital solutions for specialized IT solutions, ideal for
              startups and businesses seeking to enhance their digital
              presence.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#">Influencer</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>SERVICES</h4>
            <ul>
              <li><a href="#">CRM</a></li>
              <li><a href="#">LMS</a></li>
              <li><a href="#">User Testing</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Development</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>CONTACT US</h4>
            <p className="contact-info-text">info@itplus.com</p>
            <h4 className="meet-us-heading">MEET US IN</h4>
            <p className="contact-info-text">Colombo Sri Lanka</p>
            <div className="email-subscribe">
              <input type="email" placeholder="Enter your email" />
              <button className="email-button">Contact</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          {/* Copyright text is not visible in the provided image, so keeping it simple */}
          {/* <p>&copy; 2024 IT Plus. All rights reserved.</p> */}
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #4a00e0; /* Fallback background color */
          background-image: url('/images/Vector 19.png'); /* Corrected path to the uploaded image */
          background-size: 100% auto; /* Cover full width, auto height */
          background-position: center top; /* Position at the top */
          background-repeat: no-repeat; /* Do not repeat the image */
          color: white;
          padding-top: 80px; /* Add padding to accommodate the curve from the background image */
          padding-bottom: 2rem;
          font-size: 0.9rem;
          position: relative;
          overflow: hidden;
        }

        /* Removed .footer-wave as it's replaced by background-image */
        .footer-wave {
          display: none; /* Hide the old wave div */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1; /* Ensure content is above the background image */
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-top: 1rem; /* Adjust margin-top for content positioning */
          margin-bottom: 2rem;
        }

        .footer-brand h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-brand p {
          line-height: 1.6;
          color: #ccc;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 0.8rem;
        }

        .social-links a {
          background-color: white;
          color: #4a00e0;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .social-links a:hover {
          background-color: #33FF94;
          color: white;
        }

        .footer-column h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column ul li {
          margin-bottom: 0.5rem;
        }

        .footer-column ul li a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-column ul li a:hover {
          color: #33FF94;
        }

        .contact-info-text {
          color: #ccc;
          margin-bottom: 0.5rem;
        }

        .meet-us-heading {
          margin-top: 1.5rem;
        }

        .email-subscribe {
          display: flex;
          margin-top: 1rem;
          width: 100%;
        }

        .email-subscribe input {
          flex-grow: 1;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 5px 0 0 5px;
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 0.9rem;
          outline: none;
        }

        .email-subscribe input::placeholder {
          color: #eee;
        }

        .email-subscribe button {
          background-color: #33FF94;
          color: #4a00e0;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 0 5px 5px 0;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .email-subscribe button:hover {
          background-color: #1aff8c;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 1.5rem;
          color: #ccc;
        }

        /* Responsive adjustments for footer */
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-brand {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .email-subscribe {
            justify-content: center;
          }
          .email-subscribe input,
          .email-subscribe button {
            border-radius: 5px;
            width: 80%;
            max-width: 300px;
          }
          .email-subscribe {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
}