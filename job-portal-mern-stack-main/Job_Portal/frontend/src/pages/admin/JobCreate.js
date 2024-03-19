{
    /*
import React, { useState } from 'react';

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: '',
    location: '',
    jobType: '',
    user:"65f18483309dcc65cc77b14f",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/job/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      // Handle success - show success message, redirect, etc.
    } catch (error) {
      console.error('Error creating job:', error.message);
      // Handle error - show error message, etc.
    }
  };

  return (
    <div>
      <h2>Create a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Job Type:</label>
          <input
            type="text"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
};

export default JobForm;
    */
}

import React from 'react'

export const JobCreate = () => {
  return (
    <div>JobCreate</div>
  )
}
