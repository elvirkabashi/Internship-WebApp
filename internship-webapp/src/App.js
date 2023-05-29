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
import CompanyHome from './compHomepage/HomeTop';
import CompanyProfile from './CompProfile/CompProfile';
import ApplyInternship from './ApplyInternship/apply';
import ApplyInternship2 from './ApplyInternship/apply2';
import Postinership from './PostInternship/post';
import LogIn from './RegistrationForm/LogIn';
import SingUp from './RegistrationForm/SingUp';


function App() {
  return (
    <div className="App"> 
    <Router>

      <Routes>

      
        <Route path="/home" element={<HomeTop />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/about-us-cmp" element={<AboutUsCmp/>}/>
        <Route path="/Contact-us" element={<AboutUs/>}/>
        <Route path="/InternshipsI" element={<AboutUs/>}/>
        <Route path="/InternshipsC" element={<AboutUs/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/Signup-user" element={<SingUp/>}/>
        <Route path="/Login-cmp" element={<AboutUs/>}/>
        <Route path="/Signup-cmp" element={<AboutUs/>}/>
        <Route path="/cmpHome" element={<CompanyHome/>}/>
        <Route path="/comp-profile" element={<CompanyProfile/>}/>
        <Route path="/Post-Internship" element={<Postinership/>}/>
        <Route path="/Apply-Internship" element={<ApplyInternship/>}/>
        <Route path="/Apply-Internship2" element={<ApplyInternship2/>}/>






      </Routes>
    </Router>


    </div>
  );
}

export default App;
