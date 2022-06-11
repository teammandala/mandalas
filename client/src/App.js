import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Mid from "./app/layout/mid";
import React from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Mid />
      </Router>
    </div>
  );
}

export default App;
