import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">Energy Monitoring</h1>
      <div>
        <button onClick={() => setPage("dashboard")} className="mr-4">Dashboard</button>
        <button onClick={() => setPage("safety")}>Safety Monitoring</button>
      </div>
    </nav>
  );
}

export default Navbar;
