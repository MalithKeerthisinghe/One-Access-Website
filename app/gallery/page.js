'use client';

import React from 'react';
import Header from '../components/header'; // Import the Header component
import Footer from '../components/footer'; // Import the Footer component

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, src: 'https://images.pexels.com/photos/1792620/pexels-photo-1792620.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Canyon landscape' },
    { id: 2, src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Elephant in forest' },
    { id: 3, src: 'https://images.pexels.com/photos/3304192/pexels-photo-3304192.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Mountain lake' },
    { id: 4, src: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Road through forest' },
    { id: 5, src: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cloudy mountains' },
    { id: 6, src: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sunrise over mountains' },
    { id: 7, src: 'https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Night sky and mountain' },
    { id: 8, src: 'https://images.pexels.com/photos/2034324/pexels-photo-2034324.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Boats on water' },
    { id: 9, src: 'https://images.pexels.com/photos/1105753/pexels-photo-1105753.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'City skyline at sunset' },
    { id: 10, src: 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Person holding camera' },
    { id: 11, src: 'https://images.pexels.com/photos/745265/pexels-photo-745265.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Woman looking at camera' },
    { id: 12, src: 'https://images.pexels.com/photos/2625203/pexels-photo-2625203.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Colorful city lights' },
    { id: 13, src: 'https://images.pexels.com/photos/1310574/pexels-photo-1310574.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bird on branch' },
    { id: 14, src: 'https://images.pexels.com/photos/1239615/pexels-photo-1239615.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'River landscape' },
    { id: 15, src: 'https://images.pexels.com/photos/3928424/pexels-photo-3928424.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Astronaut on moon' },
  ];

  return (
    <div className="gallery-page-container">
      <Header /> {/* Render the Header component */}

      {/* Gallery Hero Section */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-content">
          <h1>Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="image-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="image-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer /> {/* Render the Footer component */}

      <style jsx>{`
        .gallery-page-container {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.6;
          background-color: #f8f9fa; /* Light gray background for the page */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Gallery Hero Section */
        .gallery-hero-section {
          background: linear-gradient(135deg, #4a00e0 0%, #8e2de2 100%);
          color: white;
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding-bottom: 120px; /* Space for the curve to dip into */
          border-radius: 0 0 50% 50% / 0 0 100px 100px; /* Downward curve at bottom */
          box-shadow: inset 0 -10px 20px rgba(0,0,0,0.2);
        }

        .gallery-hero-content h1 {
          font-size: 3em;
          margin-bottom: 0;
          letter-spacing: 1px;
          font-weight: 700;
        }

        /* Gallery Grid Section */
        .gallery-grid-section {
          padding: 60px 0;
          margin-top: -80px; /* Overlap with the hero section curve */
          position: relative;
          z-index: 2; /* Ensure it's above the hero section */
          background-color: #f8f9fa;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid */
          gap: 20px;
        }

        .image-item {
          background-color: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .image-item img {
          width: 100%;
          height: 200px; /* Fixed height for image consistency */
          object-fit: cover; /* Crop and cover the area */
          display: block; /* Remove extra space below image */
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .gallery-hero-content h1 {
            font-size: 2.2em;
          }

          .image-grid {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          }

          .image-item img {
            height: 150px; /* Smaller height on mobile */
          }
        }

        @media (max-width: 480px) {
          .image-grid {
            grid-template-columns: 1fr; /* Single column on very small screens */
          }
          .image-item img {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}