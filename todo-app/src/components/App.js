import "../css/App.css";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Meeting from "../components/Meeting";
import AddTodo from "../components/AddTodo";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        {/* <ProfileCard />
        <Meeting /> */}
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
