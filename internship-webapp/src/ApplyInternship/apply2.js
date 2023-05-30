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
       <div><a href="/"><button style={{backgroundColor:'#89CAF9',borderRadius:'8px'}}>Employer/Post Internship</button></a></div> 
        <div><a href="/Apply-Internship"><button style={{backgroundColor:'#1796F2',borderRadius:'8px'}}>Find Internship</button></a></div>
        
      </div>
      <div className="d-flex flex-row justify-content-start align-items-center vh-100" style={{width: '100%',height:'100%'}}>
      
          <div style={{position:'relative',bottom:'300px',left:'500px',display:'flex'}}>
            <h5>What internship do you want</h5>
            <h5 style={{marginLeft:'300px'}}>The location you wish to work at</h5>
          </div>
          <div style={{display:'flex',width:'600px',height:'38px',position:'relative',right:'380px',bottom:'260px',borderRadius:'10px'}}>
            <input type='text' placeholder='Type Internship here...' style={{position:'relative',left:'20px',width:'500px',height:'38px',borderRadius:'10px'}}></input>
            <a href="/Apply-Internship2"><img src={require('./search.png')} height="38" style={{position:'relative',left:'20px'}}></img></a>
            <input type='text' placeholder='Type Location here...' style={{width:'500px',height:'38px',borderRadius:'10px',position:'relative',left:'280px'}}></input>
          </div> 
      </div>
      <div style={{backgroundColor:'white',width:'1000px',height:'350px',position:'relative',bottom:'600px',left:'150px',borderRadius:'20px',marginBottom:'40px'}}>
      <div style={{display:'flex'}}>
      <img src={require('./pngwing.com.png')} height="100" style={{position:'relative',left:'20px'}}></img>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'30px',left:'40px',alignContent:'center'}}>
        <h3>Graphic Designer</h3>
      </div>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'30px',left:'100px',alignContent:'center'}}>
        <h3>Part-Time</h3>
      </div>
      </div>
      <div style={{display:'flex'}}>
      <div>
      <div>
        <h5 style={{color:'#635F5F',position:'relative',right:'30px',top:'10px'}}>Work Location :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
        <h3>Graphic Designer</h3>
      </div>
      </div>
      <div>
        <h5 style={{color:'#635F5F',position:'relative',right:'80px',top:'10px'}}>Pay :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
        <h3 style={{position:'relative',right:'30px',top:'3px'}}>23$ per hour</h3>
      </div>
      </div>
      <div>
      <h5 style={{color:'#635F5F',position:'relative',right:'45px',top:'10px'}}>Free Spaces :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
      <h3 style={{position:'relative',right:'30px',top:'3px'}}>4 People</h3>
      </div>
      </div>
      <h6 style={{position:'relative',right:'50px',top:'10px'}}>Posted 2h ago</h6>
      </div>
      <div style={{position:'relative',left:'40px',}}>
      <h5 style={{color:'#635F5F',position:'relative',right:'165px',top:'10px'}}>Description :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'580px',height:'150px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
      <h3 style={{position:'relative',right:'180px',top:'3px'}}>Description...</h3>
      </div>
      <div style={{position:'relative',left:'240px',top:'20px'}}>
        <button  style={{width:'100px',height:'35px',backgroundColor:'#89CAF9',borderRadius:'20px'}}>Apply</button></div>
      </div>
      </div>
      
    </div>
    <div style={{backgroundColor:'white',width:'1000px',height:'350px',position:'relative',bottom:'600px',left:'150px',borderRadius:'20px',marginBottom:'40px'}}>
      <div style={{display:'flex'}}>
      <img src={require('./pngwing.com.png')} height="100" style={{position:'relative',left:'20px'}}></img>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'30px',left:'40px',alignContent:'center'}}>
        <h3>Graphic Designer</h3>
      </div>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'30px',left:'100px',alignContent:'center'}}>
        <h3>Part-Time</h3>
      </div>
      </div>
      <div style={{display:'flex'}}>
      <div>
      <div>
        <h5 style={{color:'#635F5F',position:'relative',right:'30px',top:'10px'}}>Work Location :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
        <h3>Graphic Designer</h3>
      </div>
      </div>
      <div>
        <h5 style={{color:'#635F5F',position:'relative',right:'80px',top:'10px'}}>Pay :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
        <h3 style={{position:'relative',right:'30px',top:'3px'}}>23$ per hour</h3>
      </div>
      </div>
      <div>
      <h5 style={{color:'#635F5F',position:'relative',right:'45px',top:'10px'}}>Free Spaces :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
      <h3 style={{position:'relative',right:'30px',top:'3px'}}>4 People</h3>
      </div>
      </div>
      <h6 style={{position:'relative',right:'50px',top:'10px'}}>Posted 2h ago</h6>
      </div>
      <div style={{position:'relative',left:'40px',}}>
      <h5 style={{color:'#635F5F',position:'relative',right:'165px',top:'10px'}}>Description :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'580px',height:'150px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
      <h3 style={{position:'relative',right:'180px',top:'3px'}}>Description...</h3>
      </div>
      <div style={{position:'relative',left:'240px',top:'20px'}}>
        <button  style={{width:'100px',height:'35px',backgroundColor:'#89CAF9',borderRadius:'20px'}}>Apply</button></div>
      
      </div>
      </div>
      
    </div>

    <div style={{backgroundColor:'white',width:'1000px',height:'350px',position:'relative',bottom:'600px',left:'150px',borderRadius:'20px',marginBottom:'40px'}}>
      <div style={{display:'flex'}}>
      <img src={require('./pngwing.com.png')} height="100" style={{position:'relative',left:'20px'}}></img>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'30px',left:'40px',alignContent:'center'}}>
        <h3>Graphic Designer</h3>
      </div>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'30px',left:'100px',alignContent:'center'}}>
        <h3>Part-Time</h3>
      </div>
      </div>
      <div style={{display:'flex'}}>
      <div>
      <div>
        <h5 style={{color:'#635F5F',position:'relative',right:'30px',top:'10px'}}>Work Location :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
        <h3>Graphic Designer</h3>
      </div>
      </div>
      <div>
        <h5 style={{color:'#635F5F',position:'relative',right:'80px',top:'10px'}}>Pay :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
        <h3 style={{position:'relative',right:'30px',top:'3px'}}>23$ per hour</h3>
      </div>
      </div>
      <div>
      <h5 style={{color:'#635F5F',position:'relative',right:'45px',top:'10px'}}>Free Spaces :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
      <h3 style={{position:'relative',right:'30px',top:'3px'}}>4 People</h3>
      </div>
      </div>
      <h6 style={{position:'relative',right:'50px',top:'10px'}}>Posted 2h ago</h6>
      </div>
      <div style={{position:'relative',left:'40px',}}>
      <h5 style={{color:'#635F5F',position:'relative',right:'165px',top:'10px'}}>Description :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'580px',height:'150px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
      <h3 style={{position:'relative',right:'180px',top:'3px'}}>Description...</h3>
      </div>
      <div style={{position:'relative',left:'240px',top:'20px'}}>
        <button  style={{width:'100px',height:'35px',backgroundColor:'#89CAF9',borderRadius:'20px'}}>Apply</button></div>
      
      </div>
      </div>
      
    </div>

    <div style={{backgroundColor:'white',width:'1000px',height:'350px',position:'relative',bottom:'600px',left:'150px',borderRadius:'20px',marginBottom:'40px'}}>
      <div style={{display:'flex'}}>
      <img src={require('./pngwing.com.png')} height="100" style={{position:'relative',left:'20px'}}></img>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'30px',left:'40px',alignContent:'center'}}>
        <h3>Graphic Designer</h3>
      </div>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'30px',left:'100px',alignContent:'center'}}>
        <h3>Part-Time</h3>
      </div>
      </div>
      <div style={{display:'flex'}}>
      <div>
      <div>
        <h5 style={{color:'#635F5F',position:'relative',right:'30px',top:'10px'}}>Work Location :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
        <h3>Graphic Designer</h3>
      </div>
      </div>
      <div>
        <h5 style={{color:'#635F5F',position:'relative',right:'80px',top:'10px'}}>Pay :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
        <h3 style={{position:'relative',right:'30px',top:'3px'}}>23$ per hour</h3>
      </div>
      </div>
      <div>
      <h5 style={{color:'#635F5F',position:'relative',right:'45px',top:'10px'}}>Free Spaces :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'300px',height:'40px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
      <h3 style={{position:'relative',right:'30px',top:'3px'}}>4 People</h3>
      </div>
      </div>
      <h6 style={{position:'relative',right:'50px',top:'10px'}}>Posted 2h ago</h6>
      </div>
      <div style={{position:'relative',left:'40px',}}>
      <h5 style={{color:'#635F5F',position:'relative',right:'165px',top:'10px'}}>Description :</h5>
      <div style={{backgroundColor:'#E1EEF8',borderRadius:'10px',width:'580px',height:'150px',position:'relative',top:'5px',left:'40px',alignContent:'center'}}>
      <h3 style={{position:'relative',right:'180px',top:'3px'}}>Description...</h3>
      </div>
      <div style={{position:'relative',left:'240px',top:'20px'}}>
        <button  style={{width:'100px',height:'35px',backgroundColor:'#89CAF9',borderRadius:'20px'}}>Apply</button></div>
      
      </div>
      </div>
      
    </div>

    </div>
    
    
    
  );
};

export default HomePageComponent;
