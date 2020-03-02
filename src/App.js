import React from 'react';
import './App.css';
import CardList from "./components/CardList";

// Pass the entire JSON object to pokemon card
// and display all wanted information with 1 param

function App() {
  return (
    <div>
      <CardList />
    </div>
  );
}

export default App;
