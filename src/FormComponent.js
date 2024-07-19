// src/FormComponent.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success', { state: formValues });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formValues.firstName) {
      isValid = false;
      errors['firstName'] = 'First name is required';
    }

    if (!formValues.lastName) {
      isValid = false;
      errors['lastName'] = 'Last name is required';
    }

    if (!formValues.username) {
      isValid = false;
      errors['username'] = 'Username is required';
    }

    if (!formValues.email) {
      isValid = false;
      errors['email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      isValid = false;
      errors['email'] = 'Email is invalid';
    }

    if (!formValues.password) {
      isValid = false;
      errors['password'] = 'Password is required';
    }

    if (!formValues.phoneNo) {
      isValid = false;
      errors['phoneNo'] = 'Phone number is required';
    }

    if (!formValues.country) {
      isValid = false;
      errors['country'] = 'Country is required';
    }

    if (!formValues.city) {
      isValid = false;
      errors['city'] = 'City is required';
    }

    if (!formValues.panNo) {
      isValid = false;
      errors['panNo'] = 'PAN number is required';
    }

    if (!formValues.aadharNo) {
      isValid = false;
      errors['aadharNo'] = 'Aadhar number is required';
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
        {formErrors.firstName && <span>{formErrors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
        {formErrors.lastName && <span>{formErrors.lastName}</span>}
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        {formErrors.username && <span>{formErrors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <span>{formErrors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? 'Hide' : 'Show'}
        </button>
        {formErrors.password && <span>{formErrors.password}</span>}
      </div>
      <div>
        <label>Phone No.:</label>
        <input
          type="text"
          name="phoneNo"
          value={formValues.phoneNo}
          onChange={handleChange}
        />
        {formErrors.phoneNo && <span>{formErrors.phoneNo}</span>}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formValues.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          {/* Add other countries as needed */}
        </select>
        {formErrors.country && <span>{formErrors.country}</span>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formValues.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
          {/* Add other cities as needed */}
        </select>
        {formErrors.city && <span>{formErrors.city}</span>}
      </div>
      <div>
        <label>PAN No.:</label>
        <input
          type="text"
          name="panNo"
          value={formValues.panNo}
          onChange={handleChange}
        />
        {formErrors.panNo && <span>{formErrors.panNo}</span>}
      </div>
      <div>
        <label>Aadhar No.:</label>
        <input
          type="text"
          name="aadharNo"
          value={formValues.aadharNo}
          onChange={handleChange}
        />
        {formErrors.aadharNo && <span>{formErrors.aadharNo}</span>}
      </div>
      <button type="submit" disabled={!validateForm()}>
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
