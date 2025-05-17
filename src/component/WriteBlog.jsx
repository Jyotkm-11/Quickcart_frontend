import React, { useState } from 'react';
import axios from 'axios';
import { Adminheader } from './Adminheader';

const WriteBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imgsrc: '',
    author: '',
    date: new Date().toISOString().split('T')[0], // yyyy-mm-dd
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/blogs/add', formData);
      setMessage('Blog posted successfully!');
      setFormData({
        title: '',
        description: '',
        imgsrc: '',
        author: '',
        date: new Date().toISOString().split('T')[0],
      });
    } catch (err) {
      console.error(err);
      setMessage('Failed to post blog');
    }
  };

  return (
    <>
    <Adminheader/>
    <div className="container mt-5" style={{ maxWidth: '700px' }}>
      <h2 className="text-center mb-4">Write a Blog</h2>

      {message && <div className="alert alert-info text-center">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            name="imgsrc"
            value={formData.imgsrc}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Blog</button>
      </form>
    </div>
    </>
  );
};

export default WriteBlog;
