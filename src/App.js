import logo from "./logo.svg";
import "./App.css";
import React from "react";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoFeature />
      </header>
    </div>
  );
}

export default App;
