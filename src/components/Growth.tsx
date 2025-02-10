const sampleGrowthData = [
  { metric: 'Monthly Active Users', value: 12000, change: '+5.4%' },
  { metric: 'New Signups', value: 4500, change: '+7.8%' },
  { metric: 'Churn Rate', value: '2.1%', change: '-0.5%' },
  { metric: 'Revenue', value: '$150,000', change: '+10.2%' },
];

const Growth: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Growth</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Metric</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Value</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Change</th>
          </tr>
        </thead>
        <tbody>
          {sampleGrowthData.map((data, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{data.metric}</td>
              <td className="py-2 px-4 border-b border-gray-200">{data.value}</td>
              <td className={`py-2 px-4 border-b border-gray-200 ${data.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{data.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Growth;