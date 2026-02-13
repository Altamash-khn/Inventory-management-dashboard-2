import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="bg-[#090b0f]">
      <Login />
    </div>
  );
}

export default App;
