import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Block A", voltage: 220, current: 15 },
  { name: "Block B", voltage: 210, current: 12 },
  { name: "Block C", voltage: 230, current: 18 },
];

function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Solar Power (kWh)</h3>
          <p className="text-green-600 font-semibold">1200 kWh Generated</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Battery Storage</h3>
          <p className="text-blue-600 font-semibold">75% Charged</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mt-6">
        <h3 className="font-bold mb-2">Voltage & Current Monitoring</h3>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="voltage" stroke="#8884d8" />
          <Line type="monotone" dataKey="current" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}

export default Dashboard;
