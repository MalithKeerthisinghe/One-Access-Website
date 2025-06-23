'use client';

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { MapPin, Briefcase, Clock, Star, Users } from 'lucide-react'; // Importing icons

export default function CareersPage() {
  const jobVacancies = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      location: 'Battaramulla',
      type: 'On site',
      hours: 'Full Time',
      experience: 'Minimum 1 year experience',
      vacancies: 4,
    },
    {
      id: 2,
      title: 'Senior Software Engineer',
      location: 'Battaramulla',
      type: 'On site',
      hours: 'Full Time',
      experience: 'Minimum 1 year experience',
      vacancies: 4,
    },
    {
      id: 3,
      title: 'Senior Software Engineer',
      location: 'Battaramulla',
      type: 'On site',
      hours: 'Full Time',
      experience: 'Minimum 1 year experience',
      vacancies: 4,
    },
    // You can add more job vacancy objects here
  ];

  return (
    <div className="careers-page-container">
      <Header />

      {/* Careers Hero Section */}
      <section className="careers-hero-section">
        <div className="careers-hero-content">
          <h1>Job Vacancies</h1>
        </div>
      </section>

      {/* Job Vacancies Section */}
      <section className="job-vacancies-section">
        <div className="container">
          <div className="job-cards-grid">
            {jobVacancies.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.title}</h3>
                <div className="job-detail">
                  <MapPin size={18} color="#4a00e0" />
                  <span>{job.location}</span>
                </div>
                <div className="job-detail">
                  <Briefcase size={18} color="#4a00e0" />
                  <span>{job.type}</span>
                </div>
                <div className="job-detail">
                  <Clock size={18} color="#4a00e0" />
                  <span>{job.hours}</span>
                </div>
                <div className="job-detail">
                  <Star size={18} color="#4a00e0" />
                  <span>{job.experience}</span>
                </div>
                <div className="job-detail">
                  <Users size={18} color="#4a00e0" />
                  <span>No. of vacancies: {job.vacancies}</span>
                </div>
                <button className="apply-now-button">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .careers-page-container {
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

        /* Careers Hero Section */
        .careers-hero-section {
          background-color: #360065; /* Dark purple from header */
          color: white;
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding-bottom: 120px; /* Space for the curve to dip into */
          border-radius: 0 0 50% 50% / 0 0 100px 100px; /* Downward curve at bottom */
          box-shadow: inset 0 -10px 20px rgba(0,0,0,0.2);
        }

        .careers-hero-content h1 {
          font-size: 3em;
          margin-bottom: 0;
          letter-spacing: 1px;
          font-weight: 700;
        }

        /* Job Vacancies Section */
        .job-vacancies-section {
          padding: 60px 0;
          margin-top: -80px; /* Overlap with the hero section curve */
          position: relative;
          z-index: 2; /* Ensure it's above the hero section */
          background-color: #f8f9fa;
        }

        .job-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          justify-content: center; /* Center the grid items */
        }

        .job-card {
          background-color: #ffffff;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e0e0e0; /* Subtle border */
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Align text to left */
        }

        .job-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
        }

        .job-card h3 {
          font-size: 1.6em;
          color: #4a00e0; /* Purple title */
          margin-bottom: 20px;
          font-weight: 600;
          width: 100%; /* Ensure title takes full width */
        }

        .job-detail {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #555;
          font-size: 0.95em;
        }

        .job-detail span {
          flex: 1; /* Allow text to take up remaining space */
        }

        .apply-now-button {
          background-color: #33FF94; /* Green button */
          color: #4a00e0; /* Dark purple text */
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-size: 1em;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          margin-top: 30px; /* Space above the button */
          width: 100%; /* Make button full width of card */
          font-weight: 600;
        }

        .apply-now-button:hover {
          background-color: #1aff8c; /* Darker green on hover */
          transform: translateY(-2px);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .careers-hero-content h1 {
            font-size: 2.2em;
          }

          .job-cards-grid {
            grid-template-columns: 1fr; /* Stack on small screens */
          }

          .job-card {
            align-items: center; /* Center content when stacked */
            text-align: center;
          }

          .job-detail {
            justify-content: center; /* Center details too */
            width: 100%;
          }
          .job-detail span {
            text-align: center;
          }

          .apply-now-button {
            width: 80%; /* Adjust button width */
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
}