import React, { useState, useEffect } from 'react';
import AddChore from './components/AddChore'
import ChoreList from './components/ChoreList'

function App() {

  return (
    <div>
      <h1>Happy Household</h1>
      <AddChore />
      <ChoreList />
    </div>
  );
}

export default App;
