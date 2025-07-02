 import React from 'react';

const ReportTable = ({ data }) => {
  const dummyData = [
    { parameter: 'Hemoglobin', value: '13.5' },
    { parameter: 'WBC', value: '15.2' },
    { parameter: 'RBC', value: '5.1' },
    { parameter: 'Platelets', value: '250' },
    { parameter: 'Glucose', value: '110' }
  ];

  const tableData = data && data.length > 0 ? data : dummyData;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-x-auto p-4">
      <h3 className="text-lg font-semibold mb-4">Health Parameters</h3>
      <table className="w-full table-auto text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Parameter</th>
            <th className="p-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{item.parameter || '-'}</td>
              <td className="p-2 text-blue-700">{item.value || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
