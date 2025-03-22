import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../utils/api'; // Use named import
import '../styles/globals.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const data = await getJobById(id); // Use getJobById directly
        setJob(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;