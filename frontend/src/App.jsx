import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Pages/jsx/Registration";
import Login from "./Pages/jsx/Login";
import Home from "./Pages/jsx/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;