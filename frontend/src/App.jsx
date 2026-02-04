import Sidebar from "./components/Sidebar";
import BoatList from "./components/BoatList";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <BoatList />
      {/* <UserList /> */}
    </div>
  );
}

export default App;