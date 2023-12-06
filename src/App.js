import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

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
