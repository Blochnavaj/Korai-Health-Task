 import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const TrendChart = ({ data }) => {
  console.log('TrendChart Raw Data:', data);

  // Fallback dummy data
  const fallbackData = [
    { parameter: 'Hemoglobin', value: '13.5' },
    { parameter: 'WBC', value: '7.2' }
  ];

  const chartData = (data && data.length > 0 ? data : fallbackData)
    .filter(d => !isNaN(parseFloat(d.value)))
    .map(d => ({
      name: d.parameter,
      value: parseFloat(d.value)
    }));

  console.log('Processed Chart Data:', chartData);

  if (!chartData.length) return <p className="text-gray-500 mt-2">No numeric data to display.</p>;

  return (
    <div className="bg-white p-4 shadow rounded-lg mt-6">
      <h3 className="text-lg font-bold mb-2 text-gray-700">Parameter Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
