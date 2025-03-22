// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import useJobStore from '../store/store';
// import '../styles/globals.css';

// const jobSchema = z.object({
//   title: z.string().min(1, 'Title is required'),
//   description: z.string().min(1, 'Description is required'),
//   location: z.string().min(1, 'Location is required'),
// });

// const CompanyDashboard = () => {
//   const { jobs, addJob } = useJobStore();
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(jobSchema),
//   });

//   const onSubmit = (data) => {
//     const newJob = { id: Date.now(), ...data };
//     addJob(newJob);
//   };

//   return (
//     <div className="container">
//       <h1>Company Dashboard</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="form">
//         <div>
//           <label>Job Title</label>
//           <input {...register('title')} />
//           {errors.title && <p className="error">{errors.title.message}</p>}
//         </div>
//         <div>
//           <label>Job Description</label>
//           <textarea {...register('description')} />
//           {errors.description && <p className="error">{errors.description.message}</p>}
//         </div>
//         <div>
//           <label>Location</label>
//           <input {...register('location')} />
//           {errors.location && <p className="error">{errors.location.message}</p>}
//         </div>
//         <button type="submit">Post Job</button>
//       </form>
//       <div className="posted-jobs">
//         <h2>Posted Jobs</h2>
//         {jobs.map((job) => (
//           <div key={job.id} className="job">
//             <h3>{job.title}</h3>
//             <p>{job.location}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompanyDashboard;
import React from 'react';
import { useForm } from 'react-hook-form'; // Correct import
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useJobStore from '../store/store';
import { postJob } from '../utils/api';
import '../styles/globals.css';

// Zod schema for form validation
const jobSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  location: z.string().min(1, 'Location is required'),
});

const CompanyDashboard = () => {
  const { jobs, addJob } = useJobStore();

  // Use react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data) => {
    try {
      const newJob = await postJob(data);
      addJob(newJob);
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="container">
      <h1>Company Dashboard</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <label>Job Title</label>
          <input {...register('title')} />
          {errors.title && <p className="error">{errors.title.message}</p>}
        </div>
        <div>
          <label>Job Description</label>
          <textarea {...register('description')} />
          {errors.description && <p className="error">{errors.description.message}</p>}
        </div>
        <div>
          <label>Location</label>
          <input {...register('location')} />
          {errors.location && <p className="error">{errors.location.message}</p>}
        </div>
        <button type="submit">Post Job</button>
      </form>
      <div className="posted-jobs">
        <h2>Posted Jobs</h2>
        {jobs.map((job) => (
          <div key={job.id} className="job">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDashboard;