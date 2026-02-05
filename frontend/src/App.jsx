import Sidebar from "./components/Sidebar";
import BoatList from "./components/BoatList";
import UserList from "./components/UserList";
import BoatDashboard from "./components/BoatDashboard";
import Monitoring from "./components/Monitoring";
import InitialScreen from "./components/InitialScreen";

function App() {

  return (
    <div className="flex h-screen">
      <Sidebar />
      <InitialScreen />
      {/* <BoatList /> */}
      {/* <UserList /> */}
      {/* <BoatDashboard /> */}
      {/* <Monitoring /> */}
    </div>
  );
}

export default App;