import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <div className="side__navbar">
          <Sidebar />
        </div>
        <div className="content__div">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
