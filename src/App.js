import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Change `Routes` to `Switch`
import EventList from './pages/EventList';

function App() {
  return (
    <Router>
      <Switch> {/* Replace Routes with Switch */}
        <Route path="/" exact component={EventList} /> {/* Use Route with `exact` */}
      </Switch>
    </Router>
  );
}

export default App;
