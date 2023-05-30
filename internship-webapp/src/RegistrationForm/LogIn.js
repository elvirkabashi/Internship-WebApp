import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forma e regjistrimit u dërgua:', {
      email,
      password
    });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' ,maxWidth: "1000px"}}>
      <div className="col-md-6">
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#34B3E1', padding: '2rem', borderRadius: '15px' }}>
          <div className="mb-3">
            <button type="button" className="btn btn-primary me-5" style={{borderRadius: "30%"}}>LogIn</button>
            <Link to='/Signup-user' type="button" className="btn btn-primary" style={{background:'transparent', border: "none"}}>SignUp</Link>
          </div>
          <div className="mb-3">
            <input type="email" placeholder="Intern Email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="mb-3">
            <input type="password" placeholder="Password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div className="mb-3">
            <Link to='/home' type="submit" className="btn btn-primary me-2">Submit</Link>
            <Link to='/Login-cmp' type="button" className="btn btn-primary">Company</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
