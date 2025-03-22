
const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    description: 'We are looking for a skilled Frontend Developer to join our team.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Code Masters',
    location: 'New York, NY',
    description: 'Join our team as a Backend Developer and work on exciting projects.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Design Co',
    location: 'San Francisco, CA',
    description: 'We need a creative UI/UX Designer to enhance our user experiences.',
  },
];

// Fetch all job listings (mock data)
export const getJobs = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockJobs);
    }, 1000); // Simulate network delay
  });
};

// Fetch job details by ID (mock data)
export const getJobById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = mockJobs.find((job) => job.id === parseInt(id));
      if (job) {
        resolve(job);
      } else {
        reject(new Error('Job not found'));
      }
    }, 1000); // Simulate network delay
  });
};

// Post a new job (mock data)
export const postJob = async (jobData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newJob = { id: Date.now(), ...jobData };
      mockJobs.push(newJob);
      resolve(newJob);
    }, 1000); 
  });
};