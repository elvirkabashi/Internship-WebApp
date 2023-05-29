import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [profession, setProfession] = useState('');
  const [degree, setDegree] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forma e regjistrimit u dërgua:', {
      name,
      email,
      password,
      phoneNumber,
      birthday,
      profession,
      degree
    });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' ,maxWidth: "1000px"}}>
      <div className="col-md-6">
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#34B3E1', padding: '2rem', borderRadius: '15px' }}>
          <div className="mb-3">
            <Link to='/login' type="button" className="btn btn-primary me-5" style={{background:'transparent', border: "none"}}>LogIn</Link>
            <button type="button" className="btn btn-primary" style={{borderRadius: "30%"}}>SignUp</button>
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Name" className="form-control" id="name" value={name} onChange={handleNameChange} required />
          </div>
          <div className="mb-3">
            <input type="email" placeholder="Email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="mb-3">
            <input type="password" placeholder="Password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div className="mb-3">
            <input type="tel" placeholder="Phone Number" className="form-control" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} required />
          </div>
          <div className="mb-3">
            <input type="date" placeholder="Birthday" className="form-control" id="birthday" value={birthday} onChange={handleBirthdayChange} required />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Profession" className="form-control" id="profession" value={profession} onChange={handleProfessionChange} required />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Degree" className="form-control" id="degree" value={degree} onChange={handleDegreeChange} required />
          </div>
          <div className="mb-3">
            <Link to='/home' type="submit" className="btn btn-primary me-2">Submit</Link>
            <Link to='/home' type="button" className="btn btn-primary">Company</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
