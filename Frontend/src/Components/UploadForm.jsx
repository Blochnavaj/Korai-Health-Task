 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadReport } from '../api/reportApi';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await uploadReport(file);
      localStorage.setItem('extractedData', JSON.stringify(result.data)); // Store for dashboard
      navigate('/dashboard');
    } catch (error) {
      alert('Error uploading file. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="file" accept=".pdf,image/*" onChange={handleFileChange} className="border p-3 rounded-lg" />
      {file && <p className="text-sm text-gray-600">Selected: {file.name}</p>}
      <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Upload & View
      </button>
    </form>
  );
};

export default UploadForm;
