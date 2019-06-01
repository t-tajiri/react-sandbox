import React from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Cat from './Cat';

const App = () => (
  <div>
    <Header />
    <Route path="/cat" component={ Cat } />
  </div>
);

export default App;
