import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/loginform';
import HomePage from './components/HomePage';
import ProfileManagement from './components/ProfileManagement';
import ContentList from './components/ContentList'; // Import ContentList component
import logo from './components/Logo.jpg';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const contentButtonRef = useRef(null); // Ref for the content button

  const toggleContentList = () => {
    setShowContent(!showContent);
  };

  return (
    <Router>
      <div className="App">
        <div className="App-banner">
          <Link to="/" className="banner-button">Home</Link>
          <Link to="/about" className="banner-button">About</Link>
          <button 
            className="banner-button" 
            onClick={toggleContentList}
            ref={contentButtonRef} // Attach the ref here
          >
            Content
          </button>
          <Link to="/profile-management" className="banner-button">Profile Management</Link>
          {showContent && <ContentList anchorEl={contentButtonRef.current} />}
        </div>
        <header className="App-header">
          <img src={logo} alt="Logo" className="App-logo" />
          <h1>Welcome to Our Learning Platform</h1>
          <p>Explore a wide range of educational content and enhance your skills!</p>
        </header>
        <LoginForm />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/profile-management" element={<ProfileManagement />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
