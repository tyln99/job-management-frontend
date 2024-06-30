import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { FORM_MODE } from '../config/enums';

function JobForm({ handleSubmit, formData, handleChange, mode }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter job title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter job description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formExpiryDate">
        <Form.Label>Expiry Date</Form.Label>
        <Form.Control
          type="date"
          name="expiry_date"
          value={formData.expiry_date}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {mode === FORM_MODE.EDIT ? 'Save Changes' : 'Create Job'}
      </Button>
    </Form>
  );
}

export default JobForm;
