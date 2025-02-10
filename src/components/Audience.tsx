const sampleAudience = [
  { name: 'John Doe', age: 28, location: 'New York, USA', engagement: 'High' },
  { name: 'Jane Smith', age: 34, location: 'London, UK', engagement: 'Medium' },
  { name: 'Carlos Garcia', age: 22, location: 'Madrid, Spain', engagement: 'Low' },
  { name: 'Aiko Tanaka', age: 29, location: 'Tokyo, Japan', engagement: 'High' },
  { name: 'Liam O\'Connor', age: 31, location: 'Dublin, Ireland', engagement: 'Medium' },
];

const Audience: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Audience</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Age</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Location</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Engagement</th>
          </tr>
        </thead>
        <tbody>
          {sampleAudience.map((audience, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{audience.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{audience.age}</td>
              <td className="py-2 px-4 border-b border-gray-200">{audience.location}</td>
              <td className={`py-2 px-4 border-b border-gray-200 ${audience.engagement === 'High' ? 'text-green-600' : audience.engagement === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>{audience.engagement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Audience;