
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import History from "./pages/History";
import Teams from "./pages/Team";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
</>
  );
}

export default App;