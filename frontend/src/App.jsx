import { useState } from "react";

import Sidebar from "./components/Sidebar";
import BoatList from "./components/BoatList";
import UserList from "./components/UserList";
import BoatDashboard from "./components/BoatDashboard";
import Monitoring from "./components/Monitoring";
import InitialScreen from "./components/InitialScreen";

function App() {

  const [activeView, setActiveView] = useState("home");

  const renderView = () => {
    switch (activeView) {
      case "home":
        return <InitialScreen />;
      case "boatList":
        return <BoatList />;
      case "userList":
        return <UserList />;
      case "boatDashboard":
        return <BoatDashboard />;
      case "monitoring":
        return <Monitoring />;
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