import { create } from 'zustand'; // Use named import

// Create a Zustand store
const useJobStore = create((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
  removeJob: (id) =>
    set((state) => ({
      jobs: state.jobs.filter((job) => job.id !== id),
    })),
  updateJob: (id, updatedJob) =>
    set((state) => ({
      jobs: state.jobs.map((job) =>
        job.id === id ? { ...job, ...updatedJob } : job
      ),
    })),
}));

// Export the store
export default useJobStore;