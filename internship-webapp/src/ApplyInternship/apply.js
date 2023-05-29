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
       <div><a href="/Post-Internship"><button style={{backgroundColor:'#89CAF9',borderRadius:'8px'}}>Employer/Post Internship</button></a></div> 
        <div><a href="/Login-user"><button style={{backgroundColor:'#1796F2',borderRadius:'8px'}}>Find Internship</button></a></div>
        
      </div>
      <div className="d-flex flex-row justify-content-start align-items-center vh-100" style={{width: '100%',height:'100%'}}>
      
          <div style={{position:'relative',bottom:'300px',left:'500px',display:'flex'}}>
            <h5>What internship do you want</h5>
            <h5 style={{marginLeft:'300px'}}>The location you wish to work at</h5>
          </div>
          <div style={{display:'flex',width:'600px',height:'38px',position:'relative',right:'380px',bottom:'260px',borderRadius:'10px'}}>
            <input type='text' placeholder='Type Internship here...' style={{position:'relative',left:'20px',width:'500px',height:'38px',borderRadius:'10px'}}></input>
            <a href="/Apply-Internship2"><img src={require('./search.png')} height="38" style={{position:'relative',left:'20px'}}></img></a>
            <input type='text' placeholder='Type Location here...' style={{width:'530px',height:'38px',borderRadius:'10px',position:'relative',left:'280px'}}></input>
          </div>
          
          
          
      </div>
      
    
    </div>
    
    
    
  );
};

export default HomePageComponent;
