import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  name: "",
  urlLink: "",
  description: "",
};

const api = "http://localhost:5000/categories";

const AddCategories = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState([]);

  // destructuring
  const { name, urlLink, description } = state;

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const response = await axios.get(api);
    setData(response.data);
    // console.log(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !urlLink || !description) {
      toast.error("Please fill the required inputs");
    } else {
      axios.post(api, state);
      toast.success("Posted Successfully");
      setState({
        name: "",
        urlLink: "",
        description: "",
      });
      // call to update automatic after POST without refreshing browsers
      setTimeout(() => loadCategories(), 500);
    }
  };

  const categoriesList = data.map((category, index) => (
    <div key={index}>
      <div className="mt-5">
        <div className="card mx-3" style={{ width: "18rem" }}>
          <img
            src={category.urlLink}
            className="card-img-top imgCard"
            alt={category.name}
            title={category.name}
          />
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
            <p className="card-text descriptionBg">{category.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  // function to handle the change event
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <ToastContainer />
      <Row>
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label style={{ textAlign: "left" }}>
                <h6>Meal Name</h6>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Meal Name"
                name="name"
                value={name}
                onChange={handleChange}
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
                value={urlLink}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{ textAlign: "left" }}>
                <h6>Description</h6>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={description}
                onChange={handleChange}
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
        <Col md={8}>
          <div className="categoryList">{categoriesList}</div>
        </Col>
      </Row>
    </>
  );
};

export default AddCategories;
