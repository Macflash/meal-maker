import React from "react";
import "./App.css";

import { DailyJournal } from "./food/journal";

function App() {
  return (
    <div className="App">
      <DailyJournal />
    </div>
  );
}

function Tabs() {
  const tabs = ["🍳", "📓"];
}

// ideally  have a meal tracker for the day, and a recipe/snack maker and library.

export default App;
