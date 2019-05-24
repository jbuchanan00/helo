import React from 'react';
import './App.css';
import { HashRouter as Router } from "react-router-dom"
import routes from "./routes"
import Nav from "./components/Nav/Nav"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider>
      <Router>
        <Nav />
        {routes}
      </Router>
    </Provider>
  );
}

export default App;
