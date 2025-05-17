import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from './Head';
import Footer from './Footer';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/blogs/all')
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading blogs...</div>;

  return (
   <>
   <Head/>
    <div style={{ position: 'fixed', left: 0, top: '60%', transform: 'translateY(-50%)', zIndex: 999 }}>
      <div className="d-flex flex-column align-items-center gap-2 ps-2">
        <span style={{ fontSize: '3.8rem' }}>🍕</span>
        <span style={{ fontSize: '3.8rem' }}>🍔</span>
        <span style={{ fontSize: '3.8rem' }}>🍟</span>
        <span style={{ fontSize: '3.8rem' }}>🌮</span>
      </div>
    </div>

    {/* Fixed Food Icons - Right */}
    <div style={{ position: 'fixed', right: 0, top: '60%', transform: 'translateY(-50%)', zIndex: 999 }}>
      <div className="d-flex flex-column align-items-center gap-2 pe-2">
        <span style={{ fontSize: '3.8rem' }}>🍩</span>
        <span style={{ fontSize: '3.8rem' }}>🍦</span>
        <span style={{ fontSize: '3.8rem' }}>🍰</span>
        <span style={{ fontSize: '3.8rem' }}>🥗</span>
      </div>
    </div>

    <div className="container mt-5">
      <h2 className="text-center mb-5 display-5 fw-bold border-bottom pb-2">Latest Blogs</h2>

      {blogs.map(blog => (
        <div key={blog._id} className="mb-5">
          {/* Image */}
          {blog.imgsrc && (
            <div className="d-flex justify-content-center mb-4">
              <img
                src={blog.imgsrc}
                alt={blog.title}
                style={{
                  width: '80%',
                  height: 'auto',
                  maxHeight: '500px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          )}

          {/* Title with line decoration */}
          <div className="text-center mb-2">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <div style={{ flex: 1, height: '2px', backgroundColor: '#ccc', maxWidth: '150px' }} />
              <h3 className="fw-bold text-primary text-uppercase">{blog.title}</h3>
              <div style={{ flex: 1, height: '2px', backgroundColor: '#ccc', maxWidth: '150px' }} />
            </div>
          </div>

          {/* Author Info with styling */}
          <div className="text-center mb-3">
            <span className="text-secondary" style={{ fontStyle: 'italic', fontWeight: 500 }}>
              ✍️ By <span className="text-dark fw-semibold">{blog.author}</span> | 🗓️ {new Date(blog.date).toLocaleDateString()}
            </span>
          </div>

          {/* Description */}
          <div className="px-4" style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'justify', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p>{blog.description}</p>
          </div>

          <hr className="my-5" style={{ borderTop: '2px dashed #ccc' }} />
        </div>
      ))}

      {blogs.length === 0 && (
        <div className="text-center text-muted">No blogs found.</div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;
