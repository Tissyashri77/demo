// ContactForm.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/contact.css"
import Navbar from '../common/components/Navbar'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
    <div className='container mt-5'>
      <Navbar contact={true}/>
    </div>
    <section className="contact_form">
      <div className='container flex-column d-flex align-items-center justify-content-center'>
        <h1>Contact</h1>
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group controlId="formName" className='mt-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className='mt-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formContactNumber" className='mt-3'>
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your contact number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className='mt-4 w-100'>
            Submit
          </Button>
        </Form>
      </div>
    </section>
    </div>

  );
};

export default Contact;
