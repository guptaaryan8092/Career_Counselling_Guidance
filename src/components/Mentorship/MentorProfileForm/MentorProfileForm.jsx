import React, { useState } from 'react';

function MentorProfileForm() {
  const [mentor, setMentor] = useState({
    name: '',
    background: '',
    experience: '',
    expertise: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentor({
      ...mentor,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save mentor profile to database
    console.log('Mentor Profile:', mentor);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create Mentor Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={mentor.name}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <textarea
        name="background"
        placeholder="Background"
        value={mentor.background}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        name="experience"
        placeholder="Experience"
        value={mentor.experience}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        name="expertise"
        placeholder="Areas of Expertise"
        value={mentor.expertise}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
}

export default MentorProfileForm;
