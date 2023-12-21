import React, { useState } from 'react';
import axios from 'axios';
import './ProfileManagement.css'; 

function ProfileManagement() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://yourbackend.com/api/profile', {
        firstName,
        lastName,
        dateOfBirth,
        gender
      });
      // Handle the response from the server
    } catch (error) {
      console.error('Profile update failed:', error);
      // Handle errors (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="profile-management-form">
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Date of Birth" />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default ProfileManagement;
