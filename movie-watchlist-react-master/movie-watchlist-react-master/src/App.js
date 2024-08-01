import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { watchlist } from "./components/watchlist";
import { watched } from "./components/watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/">
            <watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <watched />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
