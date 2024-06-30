import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../config/routes";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== ROUTES.HOME && (
        <Button title="Go back" variant="link" onClick={() => navigate(-1)}>
          <ArrowLeft /> Back
        </Button>
      )}

      <img src={`${process.env.PUBLIC_URL}/the-access-group.png`} alt="" />
      <h2>Jobs management</h2>
    </nav>
  );
};

export default Navbar;
