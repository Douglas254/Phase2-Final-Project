import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const AddCategories = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <Form>
            <Form.Group>
              <Form.Label style={{ textAlign: "left" }}>
                <h6>Meal Name</h6>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Meal Name"
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{ textAlign: "left" }}>
                <h6>Image Url</h6>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Paste Image Url"
                name="urlLink"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{ textAlign: "left" }}>
                <h6>Description</h6>
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Desrisption here"
                style={{ height: "100px", boxShadow: "none" }}
              />
            </Form.Group>
            <div className="d-grid gap-2 mt-2">
              <Button type="submit" variant="primary" size="lg">
                Post
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={8}>Your Categories Display</Col>
      </Row>
    </>
  );
};

export default AddCategories;
