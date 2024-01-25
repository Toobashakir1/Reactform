import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    gender: '',
    color: '#000000',
    birthDate: '',
    numberOfItems: 1,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Remember me:
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
      </label>

      <label>
        Gender:
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
      </label>

      <label>
        Favorite Color:
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </label>

      <label>
        Birth Date:
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Number of Items:
        <input
          type="number"
          name="numberOfItems"
          value={formData.numberOfItems}
          onChange={handleChange}
          min="1"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
