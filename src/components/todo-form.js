import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateCurrent, saveTodo } from '../reducers/todo'

class TodoForm extends Component {
  render () {
    const { currentTodo } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={currentTodo} />
      </form>
    )
  }

  handleInputChange = (evt) => {
    const val = evt.target.value

    this.props.updateCurrent(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    this.props.saveTodo(this.props.currentTodo)
  }
}

export default connect(
  (state) => ({ currentTodo: state.todo.currentTodo }),
  { updateCurrent, saveTodo }
)(TodoForm)
