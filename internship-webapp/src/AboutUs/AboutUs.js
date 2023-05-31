import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from './CostumNavbar';
import backgroundImage from '../images/background.jpg';

const AboutUsComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize : '100%' ,
      
      }}
    >
      <CustomNavbar />
     <Container>
      <div className="d-flex flex-row justify-content-start align-items-center vh-100" style={{width: '100%',height:'100%',position:'relative'}}>

          <div className="text-white text-start d-flex" style={{ padingtop:'300px'}}>
            
            <div style={{  }}>
              <h1 style={{display:'block',textAlign:'center' ,fontSize: '65px' }}>Who we are</h1>
              <p> At Intern Here, we understand the importance of internships in shaping a successful career. Our platform is designed to bridge the gap between talented students and companies<br></br> offering internships, enabling students to gain practical exposure and kickstart their career journeys.
Our mission is to empower students by providing them with a comprehensive and user-friendly platform to explore internship opportunities. We curate a vast database of internships, ensuring that students have access to <br></br> a diverse range of options.We prioritize quality and transparency in everything we do.<br></br>
We believe that every internship should offer valuable learning experiences, mentorship opportunities, and exposure to real-life projects.<br></br> By partnering with reputable companies, we strive to guarantee that students gain the most out of their internships.
Navigating the internship landscape can be overwhelming, but Intern Here is here to simplify the process. Our user-friendly interface allows you to easily search for internships<br></br> based on your preferred location, industry, and duration. Each internship listing provides detailed information, including job responsibilities, required qualifications, and the benefits you can expect. We aim to provide you with all the necessary details to make an informed decision and find the perfect internship that aligns with your interests and career goals.
Our dedicated team of professionals is committed to supporting you every step of the way. Whether you need assistance with your application, guidance during the selection process, or advice on making the most of your internship,
 we are here to help. <br></br>
 Thank you for choosing Intern Here as your trusted platform for internship opportunities. We are excited to accompany you on your journey as you gain valuable experience, expand your skillset, and lay the foundation for a bright future. Start exploring now and unlock a world of exciting internships at Intern Here!</p>
            </div>
          </div>
         
          
          
          

      
    </div></Container>
    </div>
    
    
  );
};

export default AboutUsComponent;
