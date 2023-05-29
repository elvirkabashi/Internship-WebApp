import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CustomNavbar from './CostumNavbar';
import backgroundImage from '../images/background.jpg';

const UserProfComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize : '100%' ,
      
      }}
    >
      <CustomNavbar />
      <Container>
      <div style={{display:'flex'}}>
      <div style={{position:'relative',left:'0px',top:'200px'}}>
      <div style={{ backgroundColor: "#89CAF9", width: "400px",borderRadius: "20px" }}>
          <div style={{ display: "flex", alignItems: "center",position:'relative',left:'20px' }}>
          <h1 style={{color:'white'}}>Applied Internships</h1>
          </div>
          <div style={{ backgroundColor: "white", width: "400px",borderRadius: "20px",height:'400px',position:'relative',alignContent:'center' }}>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "300px",borderRadius: "20px",height:'50px',position:'relative',right:'-90px',top:'40px',marginBottom:'15px' }}>
          <button style={{position:'relative',left:'-67px',borderRadius:'10px',width:'40px',backgroundColor:'#59B4F5'}}>X</button>
          <h3 style={{position:'relative',top:'7px'}}>Graphic Designer</h3> 
          </div>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "300px",borderRadius: "20px",height:'50px',position:'relative',right:'-90px',top:'40px',margintop:'15px',marginBottom:'10px' }}>
          <button style={{position:'relative',left:'-67px',borderRadius:'10px',width:'40px',backgroundColor:'#59B4F5'}}>X</button>
          <h3 style={{position:'relative',top:'7px'}}>Graphic Designer</h3> 
          </div>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "300px",borderRadius: "20px",height:'50px',position:'relative',right:'-90px',top:'45px' }}>
          <button style={{position:'relative',left:'-67px',borderRadius:'10px',width:'40px',backgroundColor:'#59B4F5'}}>X</button>
          <h3 style={{position:'relative',top:'7px'}}>Graphic Designer</h3> 
          </div>
          </div>
        </div> 
        </div>

        <div style={{position:'relative',left:'500px',top:'200px'}}>
      <div style={{ backgroundColor: "#89CAF9", width: "400px",borderRadius: "20px" }}>
          <div style={{ display: "flex", alignItems: "center",position:'relative',left:'20px' }}>
          <h1 style={{color:'white'}}>Your CV</h1> <button style={{position:'relative',left:'130px',width:'90px',height:'40px',borderRadius:'20px',backgroundColor:'#59B4F5'}}>Edit</button>
          </div>
          <div style={{ backgroundColor: "white", width: "400px",borderRadius: "20px",height:'500px',position:'relative',alignContent:'center' }}>
            <img
             src={require('./profile.jpeg')}
             height='480px'
             width='380px'
             style={{position:'relative',top:'10px',borderRadius:'20px'}}></img>
          </div>
        </div> 
        </div>

        </div>
        </Container>
        <div style={{position:'relative',left:'10%',top:'350px'}}>
      <div style={{ backgroundColor: "#89CAF9", width: "1500px",borderRadius: "20px" }}>
          <div style={{ display: "flex", alignItems: "center",position:'relative',left:'20px' }}>
          <h1 style={{color:'white',position:'relative',left:'500px'}}>Personal Information</h1>
          </div>
          <div style={{ backgroundColor: "white", width: "1500px",borderRadius: "20px",height:'500px',position:'relative',alignContent:'center' }}>
          <div style={{ display: "flex", alignItems: "center",position:'relative',left:'20px' }}>
          <h1 style={{color:'white'}}><br></br></h1>
          </div>
          <div style={{ backgroundColor: "white", width: "400px",borderRadius: "20px",height:'400px',position:'relative' }}>
          <div style={{display:'flex',width:'1500px'}}>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "250px",borderRadius: "20px",height:'50px',position:'relative',top:'40px',left:'20px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Name</h3> 
          </div>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "1150px",borderRadius: "20px",height:'50px',position:'relative',left:'70px',top:'40px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Filan Fisteku</h3> 
          </div>
          </div>

          <div style={{display:'flex',width:'1500px'}}>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "250px",borderRadius: "20px",height:'50px',position:'relative',top:'40px',left:'20px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Phone number</h3> 
          </div>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "1150px",borderRadius: "20px",height:'50px',position:'relative',left:'70px',top:'40px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>044 111 222</h3> 
          </div>
          </div>

          <div style={{display:'flex',width:'1500px'}}>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "250px",borderRadius: "20px",height:'50px',position:'relative',top:'40px',left:'20px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Address</h3> 
          </div>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "1150px",borderRadius: "20px",height:'50px',position:'relative',left:'70px',top:'40px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Prishtine,Qender,rr. Tring Smaili</h3> 
          </div>
          </div>

          <div style={{display:'flex',width:'1500px'}}>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "250px",borderRadius: "20px",height:'50px',position:'relative',top:'40px',left:'20px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Birthday</h3> 
          </div>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "1150px",borderRadius: "20px",height:'50px',position:'relative',left:'70px',top:'40px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>02/02/2001</h3> 
          </div>
          </div>

          <div style={{display:'flex',width:'1500px'}}>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "250px",borderRadius: "20px",height:'50px',position:'relative',top:'40px',left:'20px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Profesion</h3> 
          </div>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "1150px",borderRadius: "20px",height:'50px',position:'relative',left:'70px',top:'40px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Graphic Designer</h3> 
          </div>
          </div>

          <div style={{display:'flex',width:'1500px'}}>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "250px",borderRadius: "20px",height:'50px',position:'relative',top:'40px',left:'20px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Degree</h3> 
          </div>
          <div style={{ display:'flex',textAlign:'center',backgroundColor: "#89CAF9", width: "1150px",borderRadius: "20px",height:'50px',position:'relative',left:'70px',top:'40px',marginBottom:'15px' }}>
          <h3 style={{position:'relative',top:'7px',left:'20px'}}>Bachelor</h3> 
          </div>
          </div>
         
          </div>

          
           
          </div>
        </div> 
        </div>
      <div className="d-flex flex-row justify-content-start align-items-center vh-100" style={{width: '100%',height:'100%',position:'relative'}}>

    </div>
    </div>
    
    
  );
};

export default UserProfComponent;
