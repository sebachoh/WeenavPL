import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import BoatList from "./components/BoatList";
import UserList from "./components/UserList";
import BoatDashboard from "./components/BoatDashboard";
import Monitoring from "./components/Monitoring";
import InitialScreen from "./components/InitialScreen";
import { API_URL } from "./config";

function App() {

  const [activeView, setActiveView] = useState("home");
  const [selectedBoat, setSelectedBoat] = useState(null);

  // Simulation State
  const [isSimulating, setIsSimulating] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  // Effect to manage the countdown timer and telemetry post interval
  useEffect(() => {
    let telemetryInterval = null;
    let countdownInterval = null;

    if (isSimulating && timeLeft > 0) {
      // Function to fetch boats and post simulated telemetry
      const runTelemetryTick = async () => {
        try {
          const res = await fetch(`${API_URL}/boats`);
          if (!res.ok) throw new Error("Could not fetch boats");
          const boats = await res.json();
          
          for (const boat of boats) {
            if (boat.id) {
              const telemetryData = {
                boat_id: boat.id,
                voltage: parseFloat((Math.random() * (14.2 - 11.5) + 11.5).toFixed(2)),
                current: parseFloat((Math.random() * (50.0 - 5.0) + 5.0).toFixed(2)),
                soc: parseFloat((Math.random() * (100.0 - 40.0) + 40.0).toFixed(2)),
                temperature: parseFloat((Math.random() * (45.0 - 20.0) + 20.0).toFixed(1)),
                speed: parseFloat((Math.random() * (25.0 - 0.0) + 0.0).toFixed(1))
              };
              telemetryData.power_kw = parseFloat(((telemetryData.voltage * telemetryData.current) / 1000).toFixed(2));
              
              // Post to backend API
              fetch(`${API_URL}/telemetry`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(telemetryData)
              }).catch(err => console.error("Error sending simulation telemetry:", err));
            }
          }
        } catch (error) {
          console.error("Simulation error in fetching/sending telemetry:", error);
        }
      };

      // Execute telemetry tick immediately, then every 5 seconds
      runTelemetryTick();
      telemetryInterval = setInterval(runTelemetryTick, 5000);

      // Countdown timer decrementing every second
      countdownInterval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsSimulating(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsSimulating(false);
    }

    return () => {
      if (telemetryInterval) clearInterval(telemetryInterval);
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [isSimulating]);

  const startSimulation = () => {
    setTimeLeft(60); // 1 minute default
    setIsSimulating(true);
  };

  const stopSimulation = () => {
    setIsSimulating(false);
    setTimeLeft(0);
  };

  const renderView = () => {
    switch (activeView) {
      case "home":
        return <InitialScreen />;
      case "boatList":
        return <BoatList setActiveView={setActiveView}
          setSelectedBoat={setSelectedBoat} />;
      case "userList":
        return <UserList setActiveView={setActiveView} />;
      case "boatDashboard":
        return <BoatDashboard setActiveView={setActiveView} boat={selectedBoat} />;
      case "monitoring":
        return <Monitoring setActiveView={setActiveView} boat={selectedBoat} />;
      default:
        return <InitialScreen />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {activeView !== "monitoring" && (
        <Sidebar 
          setActiveView={setActiveView} 
          isSimulating={isSimulating}
          timeLeft={timeLeft}
          startSimulation={startSimulation}
          stopSimulation={stopSimulation}
        />
      )}

      <div className="flex-1 overflow-y-auto">
        {renderView()}
      </div>
    </div>
  );
}

export default App;