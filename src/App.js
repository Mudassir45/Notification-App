import React from "react";
import "./App.css";

import { initNotification } from "./Services/firebaseService";

function App() {
  return (
    <div className="App">
      Hello!
      <button onClick={initNotification}>Configure Notifications</button>
    </div>
  );
}

export default App;
