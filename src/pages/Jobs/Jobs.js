import React, { useEffect, useState } from "react";
import { deleteJob, getJobs } from "../../services/jobService";
import PaginatedTable from "../../components/PaginatedTable";
import "./Jobs.css";
import { Plus } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { ROUTES } from "../../config/routes";
import { useNavigate } from "react-router-dom";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";
import DynamicModal from "../../components/DynamicModal";
import { DEFAULT_PAGE_SIZE } from "../../config/enums";

const Jobs = () => {
  const [jobs, setJobs] = useState();
  const [page, setPage] = useState(1);
  const [showModal, setShowDeleteModal] = useState(false);
  const [showNotifyModal, setShowNotifyModal] = useState({
    show: false,
    isSuccess: false,
  });
  const [deleteData, setDeleteData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    const data = await getJobs(page, DEFAULT_PAGE_SIZE);
    setJobs(data);
  };

  const handleShowDeleteModal = (id, title) => {
    setDeleteData({ id, title });
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDelete = async () => {
    const deleted = await deleteJob(deleteData.id);
    if (deleted) {
      fetchData(page);
      setShowNotifyModal({ show: true, isSuccess: true });
    } else {
      setShowNotifyModal({ show: true, isSuccess: false });
    }

    setShowDeleteModal(false);
  };

  const handleClose = () => setShowNotifyModal({ show: false });

  return (
    <div className="page home_page">
      <div className="page_header">
        <h1 className="title">Jobs List</h1>
        <Button
          variant="success"
          size="sm"
          onClick={() => navigate(ROUTES.NEW_JOB)}
        >
          <Plus /> New
        </Button>
      </div>
      <PaginatedTable
        data={jobs}
        currentPage={page}
        onPageChange={(page) => setPage(page)}
        onDelete={(id, title) => handleShowDeleteModal(id, title)}
      />
      <DeleteConfirmModal
        name={deleteData?.title}
        show={showModal}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleDelete}
      />
      <DynamicModal
        show={showNotifyModal.show}
        handleClose={handleClose}
        isSuccess={showNotifyModal.isSuccess}
        message={
          showNotifyModal.isSuccess
            ? "Delete job successfully"
            : "Delete job failed"
        }
      />
    </div>
  );
};

export default Jobs;
