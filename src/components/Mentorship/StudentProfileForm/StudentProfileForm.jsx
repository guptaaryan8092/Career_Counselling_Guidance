import React, { useState } from 'react';

function StudentProfileForm() {
  const [student, setStudent] = useState({
    name: '',
    interests: '',
    aspirations: '',
    goals: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save student profile to database
    console.log('Student Profile:', student);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create Student Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <textarea
        name="interests"
        placeholder="Interests"
        value={student.interests}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        name="aspirations"
        placeholder="Career Aspirations"
        value={student.aspirations}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        name="goals"
        placeholder="Goals"
        value={student.goals}
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
}

export default StudentProfileForm;
