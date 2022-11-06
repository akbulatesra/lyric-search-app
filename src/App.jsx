import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";

import { ContextProvider } from "./context/context";
import tracksData from "./utils/data";

function App() {
  useEffect(() => {
    tracksData();
  }, []);

  return (
    <ContextProvider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={<Index />}
              />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </ContextProvider>
  );
}

export default App;
("");
