import Sidebar from "./components/Sidebar";
import BoatList from "./components/BoatList";
import UserList from "./components/UserList";
import BoatDashboard from "./components/BoatDashboard";
import Monitoring from "./components/Monitoring";

function App() {
  return (
    <div className="flex h-screen">
      {/* <Sidebar />
      {/* <BoatList /> */}
      {/* <UserList /> */}
      {/* <BoatDashboard /> */}
      <Monitoring />
    </div>
  );
}

export default App;