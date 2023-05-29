import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeTop from './HomePage/components/HomeTop';
import AboutUs from './AboutUs/AboutUs';
import AboutUsCmp from './AboutUsCmp/AboutUs';
import UserProfile from './UserProfile/UserProfile';
import InternshipComponent from './HomePage/components/InternshipComponent';
import CompanyHome from './compHomepage/HomeTop';
import CompanyProfile from './CompProfile/CompProfile';
import Postinership from './PostInternship/post';
function App() {
  return (
    <div className="App"> 
    <Router>

      <Routes>

        <Route path="/" element={<HomeTop />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/about-us-cmp" element={<AboutUsCmp/>}/>
        <Route path="/Contact-us" element={<AboutUs/>}/>
        <Route path="/InternshipsI" element={<AboutUs/>}/>
        <Route path="/InternshipsC" element={<AboutUs/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/Login-user" element={<AboutUs/>}/>
        <Route path="/Signup-user" element={<AboutUs/>}/>
        <Route path="/Login-cmp" element={<AboutUs/>}/>
        <Route path="/Signup-cmp" element={<AboutUs/>}/>
        <Route path="/cmpHome" element={<CompanyHome/>}/>
        <Route path="/comp-profile" element={<CompanyProfile/>}/>
        <Route path="/Post-Internship" element={<Postinership/>}/>



      </Routes>
    </Router>


    </div>
  );
}

export default App;
