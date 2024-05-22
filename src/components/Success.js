import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Form Submitted Successfully!</h1>
      <h2 className="mb-3">Details:</h2>
      <ul className="list-group">
        <li className="list-group-item">First Name: {formData.firstName}</li>
        <li className="list-group-item">Last Name: {formData.lastName}</li>
        <li className="list-group-item">Username: {formData.username}</li>
        <li className="list-group-item">Email: {formData.email}</li>
        <li className="list-group-item">Phone No.: {formData.phoneNo}</li>
        <li className="list-group-item">Country: {formData.country}</li>
        <li className="list-group-item">City: {formData.city}</li>
        <li className="list-group-item">Pan No.: {formData.panNo}</li>
        <li className="list-group-item">Aadhar No.: {formData.aadharNo}</li>
      </ul>
    </div>
  );
};

export default Success;
