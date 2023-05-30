import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { BsGeoAlt, BsPhone, BsEnvelope,BsFillSendFill } from 'react-icons/bs';
import backgroundImage from '../images/background.jpg';
import CustomNavbar from './CostumNavbar';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [form1, setForm1] = useState('');
  const [form2, setForm2] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bëni diçka me të dhënat e formularit, siç thirrni një API për të dërguar emailin ose ruajtjen e tyre në databazë
    console.log('Emri:', name);
    console.log('Emaili:', email);
    console.log('Forma 1:', form1);
    console.log('Forma 2:', form2);
    console.log('Mesazhi:', message);

    // Resetoni formën pasi të dhënat janë dërguar
    setName('');
    setEmail('');
    setForm1('');
    setForm2('');
    setMessage('');
  };

  return (
    <div
      className=""
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100%' }}
    >
      <CustomNavbar />
      <div style={{ color: 'white' }}>
        <h1>Get In Touch</h1>
        <p>
          Feel free to contact us
          <br></br>
          for any problems or ideas
        </p>
      </div>
      <Container
        style={{
          maxWidth: '700px',
          backgroundColor: 'white',
          padding: 0,
          borderRadius: '6px',
        }}
      >
        <h1
          style={{
            textAlign: 'left',
            fontSize: '20px',
            padding: '10px',
            color: '#297FFF',
          }}
        >
          Send us a Message
        </h1>
        <Row style={{ padding: '10px' }}>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label style={{ marginRight: '70%' }}>Your name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name..."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label style={{ marginRight: '70%' }}>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email..."
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="form1">
                    <Form.Label style={{ marginRight: '80%' }}>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      value={form1}
                      onChange={(e) => setForm1(e.target.value)}
                      placeholder="Phone number"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="form2">
                    <Form.Label style={{ marginRight: '80%' }}>Company</Form.Label>
                    <Form.Control
                      type="text"
                      value={form2}
                      onChange={(e) => setForm2(e.target.value)}
                      placeholder="Company name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="message">
                <Form.Label style={{ marginRight: '90%' }}>Message</Form.Label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message or what you want to ask?"
                />

                  <BsFillSendFill
                    size={40}
                    style={{ color: '#297FFF', marginTop: '10px',marginLeft:'5px', cursor: 'pointer' }}
                    onClick={handleSubmit}
                  />
                  </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                textAlign: 'left',
                marginTop: '20px',
                backgroundColor: '#5C6DDB',
                minHeight: '300px',
                padding: '10px',
              }}
            >
              <h3 style={{ color: 'white' }}>Contact Information</h3>
              <div>
                <BsGeoAlt size={60} style={{ color: 'white', margin: '10px' }} />
                <span style={{ color: 'white', fontSize: '20px' }}>Prizren, Kosovo 20000</span>
              </div>
              <div>
                <BsPhone size={60} style={{ color: 'white', margin: '10px' }} />
                <span style={{ color: 'white', fontSize: '20px' }}>+383 44 123 123</span>
              </div>
              <div>
                <BsEnvelope size={60} style={{ color: 'white', margin: '10px' }} />
                <span style={{ color: 'white', fontSize: '20px' }}>interninfo@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
