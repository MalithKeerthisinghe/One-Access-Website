'use client'; // This component uses client-side features (lucide-react, useState)

import React, { useState } from 'react'; // Import useState
import { Search } from 'lucide-react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
              {/* About Us dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="/about" className="dropbtn">About Us</a>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <a href="/about">About Us</a>
                    <a href="/careers">Careers</a> {/* Assuming #careers if not a full page */}
                    <a href="/contact">Contact Us</a> {/* Assuming #contact if not a full page */}
                  </div>
                )}
              </li>
              <li><a href="#services">Services</a></li>
              <li><a href="#academic">Academic</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="#contact" className="contact-btn">Contact Us</a></li>
              {/* Reverted size to 20 to allow CSS to control explicitly */}
              <li><Search className="search-icon" size={20} /></li>
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: #360065; /* Dark purple background */
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
          color: white; /* Changed to white */
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .logo-icon {
          background-color: #4a00e0; /* Still a distinct purple */
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
          color: white; /* Changed to white */
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav li a:hover {
          color: #a0a0a0; /* Lighter shade for hover */
        }

        /* Dropdown specific styles */
        .dropdown {
          position: relative;
        }

        .dropbtn {
          cursor: pointer;
        }

        .dropdown-content {
          display: block; /* Always block for 'isDropdownOpen' to show/hide it */
          position: absolute;
          background-color: #360065; /* Same as header background */
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
          top: 100%; /* Position below the About Us link */
          left: 0;
          border-radius: 5px;
          overflow: hidden; /* For rounded corners on children */
        }

        .dropdown-content a {
          color: white; /* White text for dropdown items */
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
          transition: background-color 0.3s ease;
          white-space: nowrap; /* Prevent wrapping */
        }

        .dropdown-content a:hover {
          background-color: #4a00e0; /* Darker purple on hover */
          color: white; /* Ensure text remains white */
        }

        .contact-btn {
          background-color: #4a00e0; /* Dark purple/blue */
          color: white !important; /* Override default link color */
          padding: 0.5rem 1rem;
          border-radius: 20px;
          transition: background-color 0.3s ease, border-color 0.3s ease;
          border: 2px solid #33FF94;
        }

        .contact-btn:hover {
          background-color: #3a00b0; /* Darker purple/blue */
          border-color: #1aff8c; /* Slightly different color on hover for visual feedback */
        }

        .search-icon {
          color: white;
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative; /* Ensure positioning context for potential children */
        }

        /* Explicitly target the SVG inside the icon for size control */
        .search-icon svg {
          width: 24px;
          height: 24px;
        }

        .search-icon:hover {
          color: #a0a0a0;
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

          .dropdown-content {
            position: static; /* Stack dropdown items normally on small screens */
            box-shadow: none;
            background-color: transparent; /* No background for dropdown on mobile */
            width: 100%; /* Take full width */
            text-align: center;
          }

          .dropdown-content a {
            padding: 8px 16px; /* Smaller padding */
            color: #ccc; /* Lighter color for visibility on mobile nav */
          }

          .dropdown-content a:hover {
            background-color: rgba(255,255,255,0.1); /* Subtle hover for mobile */
          }
        }
      `}</style>
    </header>
  );
}
