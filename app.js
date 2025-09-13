import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SafetyMonitoring from "./components/SafetyMonitoring";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setPage={setPage} />
      {page === "dashboard" && <Dashboard />}
      {page === "safety" && <SafetyMonitoring />}
    </div>
  );
}

export default App;
