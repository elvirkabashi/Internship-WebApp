import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CustomNavbar from './CostumNavbar';
import backgroundImage from '../../images/background.jpg';

const HomePageComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
      }}
    >
      <CustomNavbar />
      <div className="d-flex flex-row justify-content-start align-items-center vh-100">
        <Container>
          <div className="text-white text-start d-flex" style={{ marginBottom: '100px' }}>
            <div>
              <h3>Find and apply to your<br /> desired internship<br /> with us</h3>
              <p>Now it’s easier than ever to<br /> get your work experience</p>
            </div>
            <div style={{ marginLeft: '500px' }}>
              <h1 style={{ fontSize: '65px' }}>More than<br />20,000 interns</h1>
            </div>
          </div>
          <div className="d-flex justify-content-start mt-3" style={{ marginBottom: '200px' }}>
            <Button
              variant="light"
              className="custom-button"
              style={{
                backgroundColor: 'transparent',
                borderRadius: '8px',
                color: 'white',
                border: '2px solid cyan',
                padding: '10px 20px',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              Create Account
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePageComponent;
