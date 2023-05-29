import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CustomNavbar from './CostumNavbar';
import backgroundImage from '../images/background.jpg';
import { useHref } from 'react-router-dom';

const HomePageComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize : '100%',
      
      }}
    >
      <CustomNavbar />
      <div style={{position:'relative',left:'650px',top:'50px'}}>
       <div><a href="/Post-Internship"><button style={{backgroundColor:'#1796F2',borderRadius:'8px'}}>Employer/Post Internship</button></a></div> 
        <div><a href="/"><button style={{backgroundColor:'#89CAF9',borderRadius:'8px'}}>Find Internship</button></a></div>
        
      </div>
      <div className="d-flex flex-row justify-content-start align-items-center vh-100" style={{width: '100%',height:'100%'}}>
      
          <div className="text-white text-start d-flex" style={{ padingtop:'20px',marginBottom: '100px',marginLeft:'10%' }}>
            <div style={{}}>
              <h3 style={{display: 'flex'}}>No matter the skills, experience level,<br /> for your business<br /> with us</h3>
              <p style={{display: 'flex'}}>Now it’s easier than ever to<br /> or qualifications you’re looking for, <br />  you’ll find the right people on our <br />matching and hiring platform.</p>
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
                marginTop:'30px',
                marginBottom:'10px',
              }}
            >
              Create Account
            </Button>
            </div>
            <div style={{ marginLeft: '500px' }}>
              <h1 style={{display:'flex', fontSize: '65px' }}>With more than 3000<br />companies satisfied<br />with our services</h1>
            </div>
          </div>
          
          
          
          
          
      </div>
      <Container>
      <div className="container-fluid my-4" style={{borderRadius:'20px',position:'relative',bottom:'250px',background: "linear-gradient(white, #97EEFF)", padding: "20px"}}>
      <h3>Post a Internship</h3>
      <div style={{display:'flex',position:'relative',left:'320px'}}>
        <div>
      <div name="job">
        <div style={{position:'relative',right:'300px'}}>
        <h5 Style={{}}>Job Position :</h5>
        </div>
        <input type="text" placeholder='Type Job here...' name="Job" 
        style={{borderRadius:'10px', width:'300px',height:'40px',position:'relative',right:'240px',backgroundColor:'#89CAF9'}}></input>
      </div>

      <div name="People for hire" style={{marginTop:'20px'}}>
        <div style={{position:'relative',right:'290px'}}>
        <h5 >People for hire :</h5>
        </div>
        <input type="number" placeholder='Type number...' name="number" 
        style={{borderRadius:'10px', width:'300px',height:'40px',position:'relative',right:'240px',backgroundColor:'#89CAF9'}}></input>
      </div>

      <div name="Pay in euro" style={{marginTop:'20px'}}>
        <div style={{position:'relative',right:'305px'}}>
        <h5 >Pay in euro :</h5>
        </div>
        <input type='number' placeholder='Type number...' name="number" 
        style={{backgroundColor:'#89CAF9',borderRadius:'10px', width:'300px',height:'40px',position:'relative',right:'240px'}}></input>
      </div>
      </div>
      <div style={{position:'relative',left:'450px',top:'40px'}}>
      <div name="locatinon">
        <div style={{position:'relative',right:'300px'}}>
        <h5 Style={{}}>Work From :</h5>
        </div>
        <input type="text" placeholder='Type work location here...' name="Job" 
        style={{borderRadius:'10px', width:'300px',height:'40px',position:'relative',right:'240px',backgroundColor:'#89CAF9'}}></input>
      </div>
      <div name="work time" style={{marginTop:'20px'}}>
        <div style={{position:'relative',right:'300px'}}>
        <h5 Style={{}}>Work Time :</h5>
        </div>
        <input type="text" placeholder='Type work time here...' name="Job" 
        style={{borderRadius:'10px', width:'300px',height:'40px',position:'relative',right:'240px',backgroundColor:'#89CAF9'}}></input>
      </div>
      </div>
      </div>

      <div name="Description" style={{marginTop:'20px'}}>
        <div style={{position:'relative',right:'305px'}}>
        <h5 >Description :</h5>
        </div>
        <textarea id='text' placeholder='Type Description...' name="description" rows="5" cols="50"
        style={{backgroundColor:'#89CAF9',borderRadius:'10px', width:'750px',height:'150px',position:'relative',left:'10px'}}></textarea>
      </div>
      <div>
        <button style={{backgroundColor:'#89CAF9', width:'120px',height:'40px',borderRadius:'10px',textTransform:'full-width'}}>Submit</button>
      </div>
      
    </div>  
      </Container>
    
    </div>
    
    
    
  );
};

export default HomePageComponent;
