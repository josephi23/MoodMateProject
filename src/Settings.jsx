import React from 'react';

function Settings() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Settings ⚙️</h2>
      <div className="bg-gray-300 p-4 rounded-lg shadow-md">
        <p className="font-medium">Reminders</p>
        <div className="bg-pink-200 p-2 mt-2 rounded">
          <p>17/03/2025</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;