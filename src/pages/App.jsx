import React from 'react'
import AddTodo from '../containers/AddTodo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
