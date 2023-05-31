import React from 'react';
import { Button } from 'react-bootstrap';
import CustomNavbar from './CostumNavbar';
import backgroundImage from '../../images/background.jpg';
import { Link } from 'react-router-dom';

const HomePageComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize : '100%',
      
      }}
    >
      <CustomNavbar />
      <div className="d-flex flex-row justify-content-start align-items-center vh-100" style={{width: '100%',height:'100%'}}>
      
          <div className="text-white text-start d-flex" style={{ padingtop:'20px',marginBottom: '100px',marginLeft:'20%' }}>
            <div style={{}}>
              <h3 style={{display: 'flex'}}>Find and apply to your<br /> desired internship<br /> with us</h3>
              <p style={{display: 'flex'}}>Now it’s easier than ever to<br /> get your work experience</p>
              <a href='/Signup-user'><Button
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
            </Button></a>
            </div>
            <div style={{ marginLeft: '500px' }}>
              <h1 style={{display:'flex', fontSize: '65px' }}>More than<br />20,000 interns</h1>
            </div>
          </div>
          
          
          
          

      </div>
      <div className="container-fluid my-4" style={{position:'relative',bottom:'250px',background: "linear-gradient(white, #97EEFF)", padding: "20px"}}>
      <h3>Latest internships posted</h3>
      <p>Find the intern job by the category</p>

      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 m-2" style={{ backgroundColor: "white", width: "400px",borderRadius: "20px", padding:"25px",boxShadow: "10px 10px 0px grey"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={require('./../../images/google.png')} alt="Company Logo" style={{ height: "50px", marginRight: "10px",marginBottom: "110px" }} />
            <div>
              <b style={{backgroundColor: "#C4F0F9",color:"#00D5FF",borderRadius:"7px", padding:"6px", fontSize: "13px", marginRight:"200px", marginTop: "20px",}}>Full Time</b>
              <h5 style={{marginRight: "90px",marginTop:"5px"}}>Frontend Developer</h5>
              <p style={{marginTop:"10px"}}>We are looking for a product designer to join our great team.</p>
              <button className="btn btn-primary" style={{marginLeft:"160px",marginTop:"5px",backgroundColor:"transparent",border: '2px solid #00D5FF',color:"#00D5FF",fontWeight:"600"}}>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-2" style={{ backgroundColor: "white", width: "400px",borderRadius: "20px", padding:"25px",boxShadow: "10px 10px 0px grey"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={require('./../../images/google.png')} alt="Company Logo" style={{ height: "50px", marginRight: "10px",marginBottom: "110px" }} />
            <div>
              <b style={{backgroundColor: "#C4F0F9",color:"#00D5FF",borderRadius:"7px", padding:"6px", fontSize: "13px", marginRight:"200px", marginTop: "20px",}}>Full Time</b>
              <h5 style={{marginRight: "90px",marginTop:"5px"}}>Frontend Developer</h5>
              <p style={{marginTop:"10px"}}>We are looking for a product designer to join our great team.</p>
              <button className="btn btn-primary" style={{marginLeft:"160px",marginTop:"5px",backgroundColor:"transparent",border: '2px solid #00D5FF',color:"#00D5FF",fontWeight:"600"}}>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-2" style={{ backgroundColor: "white", width: "400px",borderRadius: "20px", padding:"25px",boxShadow: "10px 10px 0px grey"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={require('./../../images/google.png')} alt="Company Logo" style={{ height: "50px", marginRight: "10px",marginBottom: "110px" }} />
            <div>
              <b style={{backgroundColor: "#C4F0F9",color:"#00D5FF",borderRadius:"7px", padding:"6px", fontSize: "13px", marginRight:"200px", marginTop: "20px",}}>Full Time</b>
              <h5 style={{marginRight: "90px",marginTop:"5px"}}>Frontend Developer</h5>
              <p style={{marginTop:"10px"}}>We are looking for a product designer to join our great team.</p>
              <button className="btn btn-primary" style={{marginLeft:"160px",marginTop:"5px",backgroundColor:"transparent",border: '2px solid #00D5FF',color:"#00D5FF",fontWeight:"600"}}>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-2" style={{ backgroundColor: "white", width: "400px",borderRadius: "20px", padding:"25px",boxShadow: "10px 10px 0px grey"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={require('./../../images/google.png')} alt="Company Logo" style={{ height: "50px", marginRight: "10px",marginBottom: "110px" }} />
            <div>
              <b style={{backgroundColor: "#C4F0F9",color:"#00D5FF",borderRadius:"7px", padding:"6px", fontSize: "13px", marginRight:"200px", marginTop: "20px",}}>Full Time</b>
              <h5 style={{marginRight: "90px",marginTop:"5px"}}>Frontend Developer</h5>
              <p style={{marginTop:"10px"}}>We are looking for a product designer to join our great team.</p>
              <button className="btn btn-primary" style={{marginLeft:"160px",marginTop:"5px",backgroundColor:"transparent",border: '2px solid #00D5FF',color:"#00D5FF",fontWeight:"600"}}>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-2" style={{ backgroundColor: "white", width: "400px",borderRadius: "20px", padding:"25px",boxShadow: "10px 10px 0px grey"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={require('./../../images/google.png')} alt="Company Logo" style={{ height: "50px", marginRight: "10px",marginBottom: "110px" }} />
            <div>
              <b style={{backgroundColor: "#C4F0F9",color:"#00D5FF",borderRadius:"7px", padding:"6px", fontSize: "13px", marginRight:"200px", marginTop: "20px",}}>Full Time</b>
              <h5 style={{marginRight: "90px",marginTop:"5px"}}>Frontend Developer</h5>
              <p style={{marginTop:"10px"}}>We are looking for a product designer to join our great team.</p>
              <button className="btn btn-primary" style={{marginLeft:"160px",marginTop:"5px",backgroundColor:"transparent",border: '2px solid #00D5FF',color:"#00D5FF",fontWeight:"600"}}>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-2" style={{ backgroundColor: "white", width: "400px",borderRadius: "20px", padding:"25px",boxShadow: "10px 10px 0px rgb(122 122 122)"  }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={require('./../../images/google.png')} alt="Company Logo" style={{ height: "50px", marginRight: "10px",marginBottom: "110px" }} />
            <div>
              <b style={{backgroundColor: "#C4F0F9",color:"#00D5FF",borderRadius:"7px", padding:"6px", fontSize: "13px", marginRight:"200px", marginTop: "20px",}}>Full Time</b>
              <h5 style={{marginRight: "90px",marginTop:"5px"}}>Frontend Developer</h5>
              <p style={{marginTop:"10px"}}>We are looking for a product designer to join our great team.</p>
              <button className="btn btn-primary" style={{marginLeft:"160px",marginTop:"5px",backgroundColor:"transparent",border: '2px solid #00D5FF',color:"#00D5FF",fontWeight:"600"}}>Apply Now</button>
            </div>
          </div>
        </div>        
      </div>
      <div className="row justify-content-center align-items-center">
        {/* Add more internship divs here */}
      </div>
    </div>    
    <div style={{ position:'relative',backgroundColor: "#93BDEE", width: "500px",borderRadius: "20px", padding:"25px",alignContent:'center',marginLeft:'35%',bottom:'100px'}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{color:'white',}}>Subscribe to our newsletter for
 new updates and internshpis</h3>
          </div>
          <div >
          <input type="email"  placeholder="Email" name="email" required  style={{borderRadius:'5px'}}></input>   
          <button style={{backgroundColor:'#93BDEE',borderRadius:'8'}}>Subscribe</button>         
          </div>
          
        </div> 
    </div>
    
    
    
  );
};

export default HomePageComponent;
