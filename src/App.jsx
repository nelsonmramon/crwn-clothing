import React from "react";
import Home from "./pages/Homepage/home.component";
import Navigation from "./pages/naviation/navigation.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
