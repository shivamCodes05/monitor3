import React from "react";

function SafetyMonitoring() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Safety Monitoring</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold">Line Status</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>Line A: ✅ Connected</li>
          <li>Line B: ⚠️ Fault Detected (GPS: 28.7041, 77.1025)</li>
          <li>Line C: ✅ Connected</li>
        </ul>
        <button className="bg-red-600 text-white px-4 py-2 mt-4 rounded">
          Emergency SOS
        </button>
      </div>
    </div>
  );
}

export default SafetyMonitoring;
