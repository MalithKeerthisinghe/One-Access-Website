'use client';

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function BlogPage() {
  const latestPosts = [
    {
      id: 1,
      image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+1',
      date: 'May 9th, 2023',
      title: 'The most Popular Business Of the Year',
      readTime: '2 Min Read',
      type: 'featured',
    },
    {
      id: 2,
      image: 'https://placehold.co/150x100/dddddd/000000?text=Small+Post+2',
      date: 'Apr 19th, 2023',
      title: 'The most Popular Business Of the Year',
      readTime: '2 Min Read',
      type: 'small',
    },
    {
      id: 3,
      image: 'https://placehold.co/150x100/dddddd/000000?text=Small+Post+3',
      date: 'Apr 12th, 2023',
      title: 'The most Popular Business Of the Year',
      readTime: '2 Min Read',
      type: 'small',
    },
  ];

  const regularPosts = [
    { id: 4, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+4', date: 'May 9th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
    { id: 5, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+5', date: 'Apr 27th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
    { id: 6, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+6', date: 'Apr 20th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
    { id: 7, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+7', date: 'May 9th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
    { id: 8, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+8', date: 'Apr 27th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
    { id: 9, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+9', date: 'Apr 20th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
    { id: 10, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+10', date: 'May 9th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
    { id: 11, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+11', date: 'Apr 27th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
    { id: 12, image: 'https://placehold.co/400x250/cccccc/000000?text=Blog+Post+12', date: 'Apr 20th, 2023', title: 'The most Popular Business Of the Year', readTime: '2 Min Read' },
  ];

  return (
    <div className="blog-page-container">
      <Header />

      {/* Blog Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-content">
          <h1>Blog</h1>
        </div>
      </section>

      {/* Latest Post Section */}
      <section className="latest-post-section">
        <div className="container">
          <div className="section-header-lines">
            <p className="section-path">Our Blog \</p>
            <h2>Latest Post</h2>
          </div>
          <div className="latest-post-grid">
            <div className="main-featured-post-card"> {/* Changed class name */}
              <img src={latestPosts[0].image} alt={latestPosts[0].title} className="post-image" />
              <div className="post-info">
                <span className="post-date">{latestPosts[0].date}</span>
                <h3 className="post-title">{latestPosts[0].title}</h3>
                <div className="post-meta-bottom">
                  <span className="post-read-time">{latestPosts[0].readTime}</span>
                  <a href="#" className="read-more"></a> {/* Keep empty for CSS arrow */}
                </div>
              </div>
            </div>
            <div className="side-recent-posts">
              {latestPosts.slice(1).map((post) => (
                <div key={post.id} className="small-post-card">
                  <img src={post.image} alt={post.title} className="small-post-image" />
                  <div className="small-post-info">
                    <span className="small-post-date">{post.date}</span>
                    <h4 className="small-post-title">{post.title}</h4>
                    <div className="small-post-meta-bottom">
                      <span className="small-post-read-time">{post.readTime}</span>
                      <a href="#" className="small-read-more"></a> {/* Keep empty for CSS arrow */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Section - Repeating structure for more posts */}
      <section className="all-posts-section">
        <div className="container">
          <div className="section-header-lines">
            <p className="section-path">Our Blog \</p>
            <h2>Latest Post</h2> {/* This seems to be a repeated title as per image */}
          </div>
          <div className="regular-posts-grid">
            {regularPosts.map((post) => (
              <div key={post.id} className="regular-post-card">
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-info">
                  <span className="post-date">{post.date}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta-bottom">
                    <span className="post-read-time">{post.readTime}</span>
                    <a href="#" className="read-more"></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .blog-page-container {
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

        /* Blog Hero Section */
        .blog-hero-section {
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

        .blog-hero-content h1 {
          font-size: 3em;
          margin-bottom: 0;
          letter-spacing: 1px;
          font-weight: 700;
        }

        /* Section Header with lines (for Latest Post) */
        .section-header-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
          margin-top: 50px;
        }

        .section-header-lines .line {
          flex-grow: 1;
          height: 1px;
          background-color: #ddd;
          max-width: 100px;
          border: none;
        }

        .section-header-lines h2 {
          font-size: 2.2em;
          color: #4a00e0; /* Dark purple */
          font-weight: 600;
          white-space: nowrap;
        }

        .section-header-lines .section-path {
          color: #888;
          font-size: 0.9em;
          margin-right: -10px; /* Pull closer to the H2 */
        }

        /* Latest Post Section */
        .latest-post-section {
          padding: 40px 0;
          margin-top: -80px; /* Overlap with the hero section curve */
          position: relative;
          z-index: 2; /* Ensure it's above the hero section */
          background-color: #f8f9fa;
        }

        .latest-post-grid {
          display: grid;
          grid-template-columns: 2fr 1fr; /* Featured post wider than side posts */
          gap: 30px;
          /* Removed background and padding from grid to put on individual cards */
        }

        .main-featured-post-card { /* Changed class name */
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08); /* Lighter shadow */
          border: 1px solid #e0e0e0; /* Subtle border */
          overflow: hidden;
          padding-bottom: 20px; /* Space for the bottom meta */
        }

        .main-featured-post-card .post-image {
          width: 100%;
          height: 250px; /* Fixed height for image consistency */
          object-fit: cover;
          border-radius: 15px 15px 0 0; /* Match card border radius at top */
          margin-bottom: 15px; /* Space below image */
        }

        .main-featured-post-card .post-info {
          padding: 0 20px; /* Padding for text inside */
        }

        .main-featured-post-card .post-date {
          font-size: 0.9em;
          color: #888;
          margin-bottom: 5px;
          display: block;
        }

        .main-featured-post-card .post-title {
          font-size: 1.5em; /* Adjusted font size */
          color: #4a00e0; /* Purple for title */
          margin-bottom: 15px;
          line-height: 1.4;
          font-weight: 600;
        }

        .post-meta-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .post-read-time {
          font-size: 0.8em;
          color: #888;
        }

        .read-more {
          position: relative;
          color: #360065; /* Dark purple */
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
          padding-right: 25px; /* Space for the arrow */
        }

        .read-more::after {
          content: '→'; /* Arrow character */
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2em;
          color: #33FF94; /* Green for the arrow */
        }

        .read-more:hover {
          color: #4a00e0;
        }

        .side-recent-posts {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .small-post-card {
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08); /* Lighter shadow */
          border: 1px solid #e0e0e0; /* Subtle border */
          overflow: hidden;
          display: flex;
          gap: 15px;
          align-items: center; /* Align content centrally */
          padding: 15px; /* Padding inside card */
        }

        .small-post-card .small-post-image {
          width: 120px; /* Increased width for small image */
          height: 80px; /* Increased height for small image */
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .small-post-info {
          flex: 1;
        }

        .small-post-date {
          font-size: 0.8em;
          color: #888;
          display: block;
          margin-bottom: 3px;
        }

        .small-post-title {
          font-size: 1em; /* Adjusted font size */
          color: #4a00e0; /* Purple for title */
          line-height: 1.3;
          margin: 0;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .small-post-meta-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .small-post-read-time {
          font-size: 0.8em;
          color: #888;
        }

        .small-read-more {
          position: relative;
          color: #360065;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
          padding-right: 20px; /* Space for arrow */
        }

        .small-read-more::after {
          content: '→';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1em;
          color: #33FF94;
        }

        .small-read-more:hover {
          color: #4a00e0;
        }


        /* All Posts Section */
        .all-posts-section {
            padding: 80px 0;
            background-color: #f8f9fa;
        }

        .regular-posts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .regular-post-card {
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            border: 1px solid #e0e0e0; /* Subtle border */
        }

        .regular-post-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
        }

        .regular-post-card .post-image {
            width: 100%;
            height: 200px; /* Fixed height for consistency */
            object-fit: cover;
            border-radius: 15px 15px 0 0; /* Match card top corners */
        }

        .regular-post-card .post-info {
            padding: 20px;
            text-align: left;
        }

        .regular-post-card .post-date {
            font-size: 0.9em;
            color: #888;
            margin-bottom: 5px;
            display: block;
        }

        .regular-post-card .post-title {
            font-size: 1.3em;
            color: #4a00e0; /* Purple for title */
            line-height: 1.4;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .regular-post-card .read-more {
            color: #360065;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
            position: relative;
            padding-right: 25px; /* Space for arrow */
        }
        .regular-post-card .read-more::after {
            content: '→';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.2em;
            color: #33FF94;
        }

        .regular-post-card .read-more:hover {
            color: #4a00e0;
        }


        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .latest-post-grid {
            grid-template-columns: 1fr; /* Stack columns on smaller screens */
          }
          .main-featured-post-card {
            padding-bottom: 15px; /* Adjust padding for stacking */
          }
          .main-featured-post-card .post-image {
            height: 200px; /* Adjust height for smaller screens */
          }
          .main-featured-post-card .post-info {
            padding-top: 0;
          }
          .side-recent-posts {
            padding-top: 15px; /* Add some space above side posts */
          }
        }

        @media (max-width: 768px) {
          .blog-hero-content h1 {
            font-size: 2.2em;
          }

          .section-header-lines h2 {
            font-size: 1.8em;
          }

          .regular-posts-grid {
            grid-template-columns: 1fr;
          }

          .main-featured-post-card .post-title {
            font-size: 1.3em;
          }
          .small-post-card .small-post-title {
            font-size: 0.9em;
          }
        }

        @media (max-width: 480px) {
          .small-post-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 10px;
          }
          .small-post-card .small-post-image {
            width: 100%;
            height: 100px; /* Adjust height for full width */
            margin-bottom: 10px;
          }
          .small-post-info {
            width: 100%; /* Take full width when stacked */
          }
          .small-post-meta-bottom {
            justify-content: center; /* Center meta info when stacked */
            gap: 10px;
          }
          .main-featured-post-card .post-title {
            font-size: 1.1em;
          }
        }
      `}</style>
    </div>
  );
}