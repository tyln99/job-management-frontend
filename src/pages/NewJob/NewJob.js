import React, { useState } from 'react';
import JobForm from '../../components/JobForm';
import { FORM_MODE } from '../../config/enums';
import { createJob } from '../../services/jobService';
import DynamicModal from '../../components/DynamicModal';

const NewJob = () => {
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // submit data

    const createdData = await createJob(formData);

    setShowModal(true);
    if (createdData) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="page new_job_page">
      <h2>Create new job</h2>

      <JobForm
        mode={FORM_MODE.NEW}
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
      />

      <DynamicModal
        show={showModal}
        handleClose={handleClose}
        isSuccess={isSuccess}
        message={isSuccess ? 'Create job successfully' : 'Create job failed'}
      />
    </div>
  );
};

export default NewJob;
