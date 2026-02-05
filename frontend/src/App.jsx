import { useState } from "react";

import Sidebar from "./components/Sidebar";
import BoatList from "./components/BoatList";
import UserList from "./components/UserList";
import BoatDashboard from "./components/BoatDashboard";
import Monitoring from "./components/Monitoring";
import InitialScreen from "./components/InitialScreen";

function App() {

  const [activeView, setActiveView] = useState("home");
  const [selectedBoat, setSelectedBoat] = useState(null);

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
        return <Monitoring setActiveView={setActiveView} />;
      default:
        return <InitialScreen />;
    }
  };

  return (
    <div className="flex h-screen">
      {activeView !== "monitoring" && (
        <Sidebar setActiveView={setActiveView} />
      )}

      <div className="flex-1">
        {renderView()}
      </div>
    </div>
  );
}

export default App;