import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeTop from './HomePage/components/HomeTop';
import AboutUs from './AboutUs/AboutUs';
import InternshipComponent from './HomePage/components/InternshipComponent';

function App() {
  return (
    <div className="App"> 
    <Router>

      <Routes>

        <Route path="/" element={<HomeTop />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/Contact-us" element={<AboutUs/>}/>
        <Route path="/InternshipsI" element={<AboutUs/>}/>
        <Route path="/InternshipsC" element={<AboutUs/>}/>
        <Route path="/Profile" element={<AboutUs/>}/>
        <Route path="/Login" element={<AboutUs/>}/>
        <Route path="/Signup" element={<AboutUs/>}/>
        <Route path="/About-us" element={<AboutUs/>}/>
        <Route path="/About-us" element={<AboutUs/>}/>



      </Routes>
    </Router>


    </div>
  );
}

export default App;
