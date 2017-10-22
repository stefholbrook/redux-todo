import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import Message from './components/message'
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Router>
          <div className="todo-app">
            <Message />
            <TodoForm />
            <Route path='/:filter?' render={({ match }) => (
              <TodoList filter={match.params.filter} />
            )} />
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}

// const mapStateToProps = (state) => state
// const mapDispatchToProps = { updateCurrent }
// export default connect(
//   (state) => state,
//   { updateCurrent }
// )(App)
