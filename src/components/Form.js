import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    countryCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.countryCode) errors.countryCode = 'Country Code is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.panNo) errors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) errors.aadharNo = 'Aadhar No. is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePasswordToggle = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <div className="input-group">
          <input
            type={formData.showPassword ? 'text' : 'password'}
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            value={formData.password}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button type="button" className="btn btn-outline-secondary" onClick={handlePasswordToggle}>
              {formData.showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
      </div>
      <div className="form-group">
        <label>Phone No.</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">+</span>
          </div>
          <input
            type="text"
            name="countryCode"
            placeholder="91"
            className={`form-control ${errors.countryCode ? 'is-invalid' : ''}`}
            value={formData.countryCode}
            onChange={handleChange}
            style={{ maxWidth: '80px' }} // Modified: Adjust the width of the input field
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {errors.countryCode && <div className="invalid-feedback d-block">{errors.countryCode}</div>}
        {errors.phoneNumber && <div className="invalid-feedback d-block">{errors.phoneNumber}</div>}
      </div>
      <div className="form-group">
        <label>Country</label>
        <select
          name="country"
          className={`form-control ${errors.country ? 'is-invalid' : ''}`}
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          {/* Add more options as needed */}
        </select>
        {errors.country && <div className="invalid-feedback">{errors.country}</div>}
      </div>
      <div className="form-group">
        <label>City</label>
        <select
          name="city"
          className={`form-control ${errors.city ? 'is-invalid' : ''}`}
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          {formData.country === 'India' && (
            <>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </>
          )}
          {formData.country === 'USA' && (
            <>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
            </>
          )}
          {formData.country === 'Canada' && (
            <>
              <option value="Toronto">Toronto</option>
              <option value="Vancouver">Vancouver</option>
            </>
          )}
          {/* Add more options as needed */}
        </select>
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </div>
      <div className="form-group">
        <label>Pan No.</label>
        <input
          type="text"
          name="panNo"
          className={`form-control ${errors.panNo ? 'is-invalid' : ''}`}
          value={formData.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <div className="invalid-feedback">{errors.panNo}</div>}
      </div>
      <div className="form-group">
        <label>Aadhar No.</label>
        <input
          type="text"
          name="aadharNo"
          className={`form-control ${errors.aadharNo ? 'is-invalid' : ''}`}
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <div className="invalid-feedback">{errors.aadharNo}</div>}
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
