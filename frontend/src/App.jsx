import Sidebar from "./components/Sidebar";
import BoatList from "./components/BoatList";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <BoatList />
    </div>
  );
}

export default App;