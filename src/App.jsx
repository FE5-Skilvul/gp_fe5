import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterKampus from "./components/RegisterKampus";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/daftar/kampus" element={<RegisterKampus />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
    </>
  );
}

export default App;
