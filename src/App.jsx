import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Cat from './Cat.jsx';

const App = () => (
  <Router>
    <Header text="Hello World!"/>
    <Route path="/cat" component={Cat} />
  </Router>
);

export default App;
