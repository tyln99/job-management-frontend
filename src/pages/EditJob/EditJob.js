import React, { useEffect, useState } from "react";
import JobForm from "../../components/JobForm";
import { FORM_MODE } from "../../config/enums";
import DynamicModal from "../../components/DynamicModal";
import { getJobById, updateJob } from "../../services/jobService";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { ROUTES } from "../../config/routes";

const JobFormPage = () => {
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    const data = await getJobById(id);
    if (data) {
      setFormData({
        ...data,
        expiry_date: moment(data.expiry_date).format("YYYY-MM-DD"),
      });
    } else {
      navigate(ROUTES.JOBS);
    }
  };

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

    const createdData = await updateJob(id, formData);

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
      <h2>Edit job</h2>

      <JobForm
        mode={FORM_MODE.EDIT}
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
      />

      <DynamicModal
        show={showModal}
        handleClose={handleClose}
        isSuccess={isSuccess}
        message={isSuccess ? "Edit job successfully" : "Edit job failed"}
      />
    </div>
  );
};

export default JobFormPage;
