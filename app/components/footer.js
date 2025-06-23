'use client'; // This component uses client-side features (lucide-react)

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>IT PLUS</h3>
            <p>
              Empowering businesses with innovative technology solutions,
              reliable network infrastructure, and comprehensive IT support
              services across Sri Lanka.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Network Solutions</a></li>
              <li><a href="#">Wi-Fi Systems</a></li>
              <li><a href="#">VoIP Training</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Development</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact us</h4>
            <ul>
              <li><a href="#">+94 123 456 789</a></li>
              <li><a href="#">info@itplus.lk</a></li>
            </ul>
            <h4 className="follow-us-heading">Follow us</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 IT Plus. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #2c3e50; /* Dark blue/gray */
          color: white;
          padding: 3rem 0;
          font-size: 0.9rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-brand h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #4a00e0; /* Match logo color */
        }

        .footer-brand p {
          line-height: 1.6;
          color: #ccc;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-links a {
          color: white;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #4a00e0; /* Dark purple/blue on hover */
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
          color: #4a00e0; /* Dark purple/blue on hover */
        }

        .follow-us-heading {
          margin-top: 1.5rem; /* Add some space */
        }

        .footer-bottom {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
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
        }
      `}</style>
    </footer>
  );
}
