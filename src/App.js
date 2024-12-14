import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList'; // Ensure the path to EventList.jsx is correct

function App() {
    return (
        <Router>
            <Routes>
                {/* Root route renders EventList */}
                <Route path="/" element={<EventList />} />
            </Routes>
        </Router>
    );
}

export default App;
