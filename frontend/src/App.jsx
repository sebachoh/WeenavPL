import Sidebar from "./components/Sidebar";
import BoatList from "./components/BoatList";
import UserList from "./components/UserList";
import BoatDashboard from "./components/BoatDashboard";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {/* <BoatList /> */}
      {/* <UserList /> */}
      <BoatDashboard />
    </div>
  );
}

export default App;