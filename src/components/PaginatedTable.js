import React, { useState } from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import { PencilSquare, Trash } from "react-bootstrap-icons"; // Import icons for edit and delete
import DateTimeDisplay from "./DateTimeDisplay";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../config/routes";
import ExpandableText from "./ExpandableText";

const PaginatedTable = ({ data, onDelete, currentPage, onPageChange }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Expiry Date</th>
            <th style={{ width: "200px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.data.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td style={{ maxWidth: "500px" }}>
                    <ExpandableText text={job.description} maxLength={500} />
                  </td>
                  <td>
                    <DateTimeDisplay datetime={job.expiry_date} />
                  </td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() =>
                        navigate(ROUTES.UPDATE_JOB.replace(":id", job.id))
                      }
                    >
                      <PencilSquare /> Edit
                    </Button>{" "}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => onDelete(job.id, job.title)}
                    >
                      <Trash /> Delete
                    </Button>
                  </td>
                </tr>
              ))
            : "empty"}
        </tbody>
      </Table>
      {data && (
        <Pagination>
          {Array.from({ length: data.totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </div>
  );
};

export default PaginatedTable;
