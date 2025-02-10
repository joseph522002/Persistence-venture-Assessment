const sampleSettings = [
  { name: 'Profile', description: 'Manage your profile information', enabled: true },
  { name: 'Notifications', description: 'Configure your notification preferences', enabled: false },
  { name: 'Privacy', description: 'Adjust your privacy settings', enabled: true },
  { name: 'Security', description: 'Update your security settings', enabled: true },
  { name: 'Language', description: 'Select your preferred language', enabled: false },
];

const Settings: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <ul>
        {sampleSettings.map((setting, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{setting.name}</h2>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </div>
              <input
                type="checkbox"
                checked={setting.enabled}
                className="form-checkbox h-5 w-5 text-indigo-600"
                readOnly
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;