import React, { useEffect } from 'react';
import useJobStore from '../store/store';
import { getJobs } from '../utils/api';
import JobCard from '../components/JobCard';
import '../styles/globals.css';

const HomePage = () => {
  const { jobs, setJobs } = useJobStore();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs(); // Use getJobs directly
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, [setJobs]);

  return (
    <div className="container">
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;