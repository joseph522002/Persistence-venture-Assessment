import { memo } from 'react';
import { FaPlayCircle, FaUsers, FaChartBar, FaArrowUp } from 'react-icons/fa';

// Move static data outside component to prevent recreation on re-renders
const TIME_PERIODS = [
  { value: '7', label: 'Last 7 days' },
  { value: '30', label: 'Last 30 days' },
  { value: '90', label: 'Last 90 days' },
] as const;

const stats = [
  { name: 'Total Listens', value: '2.3M', change: '+12.3%', icon: FaPlayCircle },
  { name: 'Unique Listeners', value: '856.2K', change: '+8.1%', icon: FaUsers },
  { name: 'Avg. Time', value: '24:18', change: '+3.2%', icon: FaChartBar },
    { name: 'Growth Rate', value: '12.3%', change: '+2.4%', icon: FaArrowUp },
] as const;

const recentEpisodes = [
  { title: 'Building the Future of Tech', listens: 45231, growth: 23 },
  { title: 'AI Revolution in 2024', listens: 38192, growth: 15 },
  { title: 'Startup Success Stories', listens: 31876, growth: 8 },
  { title: 'The Developer Journey', listens: 28654, growth: 12 },
] as const;

// Create separate components for better code organization and performance
const StatCard = memo(({ stat }: { stat: typeof stats[number] }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{stat.name}</p>
        <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
      </div>
      <stat.icon className="w-12 h-12 text-indigo-600 opacity-20" />
    </div>
    <div className="mt-2">
      <span className="text-sm font-medium text-green-600">{stat.change}</span>
      <span className="text-sm text-gray-600"> vs last period</span>
    </div>
  </div>
));

const EpisodeRow = memo(({ episode }: { episode: typeof recentEpisodes[number] }) => (
  <tr className="border-t border-gray-100">
    <td className="py-4">
      <div className="font-medium text-gray-900">{episode.title}</div>
    </td>
    <td className="py-4">{episode.listens.toLocaleString()}</td>
    <td className="py-4">
      <span className="text-green-600">+{episode.growth}%</span>
    </td>
  </tr>
));

const Dashboard = () => {
  const handleExport = () => {
    // Add export functionality here
    console.log('Exporting data...');
  };

  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-lg bg-white">
            {TIME_PERIODS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <button
            onClick={handleExport}
            className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.name} stat={stat} />
        ))}
      </div>

      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Episodes</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="pb-4">Episode Title</th>
                <th className="pb-4">Total Listens</th>
                <th className="pb-4">Growth</th>
              </tr>
            </thead>
            <tbody>
              {recentEpisodes.map((episode) => (
                <EpisodeRow key={episode.title} episode={episode} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default memo(Dashboard);
