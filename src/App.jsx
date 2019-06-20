import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Todo from './Todo'

const App = () => (
  <div>
    <Header />
    <Route path="/todo" component={ Todo } />
  </div>
);

export default App;
