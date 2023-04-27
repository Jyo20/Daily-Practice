import "../css/App.css";
import Index from "../pages/Index";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
