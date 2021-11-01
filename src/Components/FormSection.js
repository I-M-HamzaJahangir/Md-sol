import React from "react";
import { Form, Button } from "react-bootstrap";

const FormSection = () => {
  return (
    <div className="form-section-wrapper">
      <div className="heading">get in touch</div>
      <hr />
      <div className="form-section">
        <Form>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Control
              required
              className="input-style"
              type="text"
              placeholder="Name*"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              className="input-style"
              type="email"
              placeholder="Email Address*"
            />
          </Form.Group>
          <Form.Control
            as="textarea"
            className="mb-3 input-style"
            placeholder="Your Message"
            style={{ height: "100px" }}
          />
          <div className="submit-button">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormSection;
