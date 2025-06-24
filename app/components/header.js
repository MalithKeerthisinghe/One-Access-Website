"use client"; // This component uses client-side features (lucide-react, useState)

import { Search } from "lucide-react";
import { useState } from "react"; // Import useState

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">
            <img
              src="/logo_of_it_plus.png"
              alt="IT PLUS Logo"
              className="logo-image"
            />
          </a>
          <nav>
            <ul className="nav">
              {/* About Us dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="/about" className="dropbtn">
                  About Us
                </a>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <a href="/about">About Us</a>
                    <a href="/careers">Careers</a>
                    <a href="/contact">Contact Us</a>
                  </div>
                )}
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#academic">Academic</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              {/* Contact Us button remains distinct */}
              <li>
                <a href="#contact" className="contact-btn">
                  Contact Us
                </a>
              </li>
              {/* Removed size prop to allow CSS to control it fully */}
              <li>
                <Search className="search-icon" />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: #360065; /* Dark purple background */
          padding: 0.5rem 0;
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

        // .logo {
        //   /* Remove or adjust these if not needed for the image logo */
        //   font-size: 1.8rem;
        //   font-weight: 700;
        //   color: white;
        //   text-decoration: none;
        //   display: flex;
        //   align-items: center;
        //   gap: 5px;
        // }

        /* Remove .logo-icon styles as it's no longer used */

        // .logo-icon {
        //   background-color: #4a00e0;
        //   color: white;
        //   padding: 0.2rem 0.5rem;
        //   border-radius: 5px;
        //   font-size: 1.2rem;
        // }

        .logo-image {
          height: 70px; /* Adjust height as needed for your logo */
          width: auto; /* Maintain aspect ratio */
          object-fit: contain; /* Ensures the whole image is visible */
        }

        /* You might want to adjust .logo gap or alignment if the image doesn't look right */
        .logo {
          gap: 0; /* Remove gap if the image is already designed with space */
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
          padding: 0.5rem 0.8rem; /* Added padding for hover effect */
          border-radius: 8px; /* Rounded corners for hover effect */
          transition: color 0.3s ease, background-color 0.3s ease; /* Added background-color to transition */
        }

        .nav li a:hover {
          color: #4a00e0; /* Dark purple text on hover */
          background-color: rgba(
            255,
            255,
            255,
            0.9
          ); /* Slightly transparent white background */
        }

        /* Dropdown specific styles */
        .dropdown {
          position: relative;
        }

        .dropbtn {
          cursor: pointer;
        }

        .dropdown-content {
          display: block;
          position: absolute;
          background-color: #360065;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          top: 100%;
          left: 0;
          border-radius: 5px;
          overflow: hidden;
        }

        .dropdown-content a {
          color: white;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
          transition: background-color 0.3s ease, color 0.3s ease; /* Ensure smooth transition for dropdown items */
          white-space: nowrap;
        }

        .dropdown-content a:hover {
          background-color: #4a00e0; /* Darker purple on hover for dropdown items */
          color: white;
        }

        .contact-btn {
          background-color: #4a00e0;
          color: white !important;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          transition: background-color 0.3s ease, border-color 0.3s ease;
          border: 2px solid #33ff94;
        }

        .contact-btn:hover {
          background-color: #3a00b0;
          border-color: #1aff8c;
        }

        .search-icon {
          color: white;
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative;
        }

        .search-icon svg {
          width: 100px; /* Increased size for the search icon to 100px */
          height: 100px; /* Increased size for the search icon to 100px */
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
            position: static;
            box-shadow: none;
            background-color: transparent;
            width: 100%;
            text-align: center;
          }

          .dropdown-content a {
            padding: 8px 16px;
            color: #ccc;
          }

          .dropdown-content a:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </header>
  );
}
