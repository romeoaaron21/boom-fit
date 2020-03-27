
import React from "react";
import "./App.css";

import StateProvider from "./context/stateContext";
import BoomFitDashboard from "./components/BoomFitDashboard";

function App() {

  return (
    <StateProvider>
      <div className="App">
        <header
          className="App-header"
          style={{
            background:
              "no-repeat center url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
            backgroundSize: "cover"
          }}
        >
          <BoomFitDashboard />
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
