'use client'; // This component uses client-side features (lucide-react)

import React from 'react';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">
            <span className="logo-icon">IT</span>
            PLUS
          </a>
          <nav>
            <ul className="nav">
              <li><a href="/about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#academic">Academic</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact" className="contact-btn">Contact Us</a></li>
              <li><Search className="search-icon" size={20} /></li>
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: #360065; /* White background */
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #4a00e0; /* Dark purple/blue */
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .logo-icon {
          background-color: #4a00e0;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 5px;
          font-size: 1.2rem;
        }

        .nav {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav li a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav li a:hover {
          color: #4a00e0; /* Dark purple/blue on hover */
        }

        .contact-btn {
          background-color: #4a00e0; /* Dark purple/blue */
          color: white !important; /* Override default link color */
          padding: 0.5rem 1rem;
          border-radius: 20px;
          transition: background-color 0.3s ease;
          border: 2px solid #33FF94;
        }

        .contact-btn:hover {
          background-color: #3a00b0; /* Darker purple/blue */
        }

        .search-icon {
          color: white;
          cursor: pointer;
          transition: color 0.3s ease;
          
          width: 24px !important;
          height: 24px !important;
        }

        .search-icon:hover {
          color: #4a00e0;
        }

        /* Responsive adjustments for header */
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
          }

          .nav {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }

          .nav li {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </header>
  );
}
