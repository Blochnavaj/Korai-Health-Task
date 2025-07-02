 import React from 'react';
import UploadForm from '../Components/UploadForm';

const UploadPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-xl p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Upload Lab Report</h2>
        <UploadForm />
      </div>
    </div>
  );
};

export default UploadPage;
