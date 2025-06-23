'use client'; // This component uses client-side features (lucide-react)

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Added Instagram

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top wave section */}
      <div className="footer-wave"></div>

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
              <a href="#" aria-label="Instagram"><Instagram size={24} /></a> {/* Increased size to match image */}
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
          background-color: #4a00e0; /* Dark purple from the image */
          color: white;
          padding-top: 0; /* Remove top padding to accommodate wave */
          padding-bottom: 2rem; /* Adjusted padding-bottom */
          font-size: 0.9rem;
          position: relative;
          overflow: hidden; /* Ensure wave stays within bounds */
        }

        .footer-wave {
          width: 100%;
          height: 120px; /* Taller for a smoother curve */
          background: linear-gradient(to right, #33FF94, #66FFB3);
          border-radius: 0 0 50% 50% / 0 0 100% 100%; /* Large vertical curve */
          position: absolute;
          top: -100px; /* Pull it up to overlap footer */
          left: 0;
          z-index: 0;
          transform: none; /* Remove rotate for top-down curve */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative; /* Ensure container content is above the wave */
          z-index: 1;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-top: 4rem; /* Push content down to avoid overlapping the wave */
          margin-bottom: 2rem;
        }

        .footer-brand h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white; /* Changed to white as per image */
        }

        .footer-brand p {
          line-height: 1.6;
          color: #ccc;
          margin-bottom: 1.5rem; /* Space before social links */
        }

        .social-links {
          display: flex;
          gap: 0.8rem; /* Smaller gap */
        }

        .social-links a {
          background-color: white; /* White background for icons */
          color: #4a00e0; /* Dark purple for icons */
          border-radius: 50%;
          width: 40px; /* Fixed size for circular icons */
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .social-links a:hover {
          background-color: #33FF94; /* Green on hover */
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
          color: #33FF94; /* Green on hover */
        }

        .contact-info-text {
          color: #ccc;
          margin-bottom: 0.5rem;
        }

        .meet-us-heading {
          margin-top: 1.5rem; /* Space before "Meet Us" */
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
          border-radius: 5px 0 0 5px; /* Rounded left corners */
          background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
          color: white;
          font-size: 0.9rem;
          outline: none;
        }

        .email-subscribe input::placeholder {
          color: #eee;
        }

        .email-subscribe button {
          background-color: #33FF94; /* Green button */
          color: #4a00e0; /* Dark purple text */
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 0 5px 5px 0; /* Rounded right corners */
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .email-subscribe button:hover {
          background-color: #1aff8c; /* Darker green on hover */
        }

        .footer-bottom {
          text-align: center;
          padding-top: 1.5rem;
          /* Removed border-top as per new image */
          color: #ccc;
        }

        /* Responsive adjustments for footer */
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr; /* Stack columns on small screens */
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
            border-radius: 5px; /* Full rounded corners when stacked */
            width: 80%; /* Adjust width for small screens */
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
