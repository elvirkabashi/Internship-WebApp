import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeTop from './HomePage/components/HomeTop';
import AboutUs from './AboutUs/AboutUs';
import UserProfile from './UserProfile/UserProfile';
import LogIn from './RegistrationForm/LogIn';
import SingUp from './RegistrationForm/SingUp';

function App() {
  return (
    <div className="App"> 
    <Router>

      <Routes>

        <Route path="/" element={<HomeTop />} />
        <Route path="/home" element={<HomeTop />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/Contact-us" element={<AboutUs/>}/>
        <Route path="/InternshipsI" element={<AboutUs/>}/>
        <Route path="/InternshipsC" element={<AboutUs/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/singup" element={<SingUp/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/About-us" element={<AboutUs/>}/>
        <Route path="/About-us" element={<AboutUs/>}/>



      </Routes>
    </Router>


    </div>
  );
}

export default App;
