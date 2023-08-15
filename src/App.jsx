import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Info from "./components/Info";
import Homepage from "./components/Homepage";
import Mytemplate from "./components/Mytemplate";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="info" element={<Info />} />
          <Route path="mytemplate" element={<Mytemplate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


