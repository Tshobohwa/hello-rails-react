import React from "react";
import RandomMessage from "./RandomMessage";
import { Route, Routes } from "react-router";

const App = () => (
  <Routes>
    <Route path="/" element={<RandomMessage />} />
  </Routes>
);

export default App;
