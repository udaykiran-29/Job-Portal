import React from 'react';
import '../styles/globals.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <a href={`/jobs/${job.id}`}>View Details</a>
    </div>
  );
};

export default JobCard;