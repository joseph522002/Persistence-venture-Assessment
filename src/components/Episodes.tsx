import React from 'react';

      const sampleData = [
        { metric: 'Total Listens', value: 2300000, change: '+12.3%' },
        { metric: 'Unique Listeners', value: 856200, change: '+8.1%' },
        { metric: 'Avg. Time', value: '24:18', change: '+3.2%' },
        { metric: 'Growth Rate', value: '12.3%', change: '+2.4%' },
      ];

      const Analytics: React.FC = () => {
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Analytics</h1>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Metric</th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Value</th>
                  <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Change</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200">{data.metric}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{data.value.toLocaleString()}</td>
                    <td className={`py-2 px-4 border-b border-gray-200 ${data.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{data.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };

      export default Analytics;