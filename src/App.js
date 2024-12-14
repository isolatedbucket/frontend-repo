import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
