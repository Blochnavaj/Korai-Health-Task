 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadReport } from '../api/reportApi';
import Loader from '../ui/Loader'; // Adjust the path if needed

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await uploadReport(file);
      localStorage.setItem('extractedData', JSON.stringify(result.data));
      navigate('/dashboard');
    } catch (error) {
      alert('Error uploading file. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex justify-center items-center">
          <Loader />
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 z-10">
        <input
          type="file"
          accept=".pdf,image/*"
          onChange={handleFileChange}
          className="border p-3 rounded-lg"
        />
        {file && <p className="text-sm text-gray-600">Selected: {file.name}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          disabled={isLoading}
        >
          Upload & View
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
