import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import Header from './components/layout/Header';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Hello',
      completed: false
    },
    {
      id: 2,
      title: 'World',
      completed: true
    },
    {
      id: 3,
      title: 'Foo',
      completed: false
    },
    {
      id: 5,
      title: 'Bar',
      completed: true
    },
    {
      id: 6,
      title: 'End',
      completed: false
    }
  ]);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, title, completed: false }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  console.log(todos);
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container'>
          <Header />
          <Route
            path='/'
            exact
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={addTodo}></AddTodo>
                <Todos
                  todos={todos}
                  deleteTodo={deleteTodo}
                  markTodo={markTodo}
                >
                  {' '}
                </Todos>
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
