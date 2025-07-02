 import React, { useState, useEffect } from 'react';
import ReportTable from '../components/ReportTable';
import TrendChart from '../components/TrendChart';

const DashboardPage = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('extractedData');
    if (data) {
      const parsed = JSON.parse(data);
      setReportData(parsed);
      console.log("Loaded report data:", parsed);
    }
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Dashboard</h2>
      <ReportTable data={reportData} />
      <TrendChart data={reportData} />
    </div>
  );
};

export default DashboardPage;
