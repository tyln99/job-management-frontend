import axios from "axios";

const API_URL = "http://localhost:3000/api/jobs";

const getJobs = async (pageNumber = 1, pageSize = 5) => {
  try {
    const response = await axios.get(
      `${API_URL}?page[number]=${pageNumber}&page[size]=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

const getJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching job with id ${id}:`, error);
  }
};

const createJob = async (jobData) => {
  try {
    const response = await axios.post(API_URL, jobData);
    return response.data;
  } catch (error) {
    console.error("Error creating job:", error);
  }
};

const updateJob = async (id, jobData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, jobData);
    return response.data;
  } catch (error) {
    console.error(`Error updating job with id ${id}:`, error);
  }
};

const deleteJob = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting job with id ${id}:`, error);
    throw error;
  }
};

export { getJobs, getJobById, createJob, updateJob, deleteJob };
