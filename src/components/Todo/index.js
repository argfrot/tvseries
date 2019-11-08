import React, { Component } from 'react';

const todoItemStyles = { display: "block" }

const TodoItem = ({ index, item, handleDelete }) => (
    <li className="todoitem" style={todoItemStyles}>
        {item}
        <button onClick={() => handleDelete(index)}>X</button>
    </li>
)

class Todo extends Component {

    state = {
        todos: ['Todo 1', 'And another'],
        currtodo: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            todos: this.state.todos.concat(this.state.currtodo),
            currtodo: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            currtodo: event.target.value
        })
    }

    handleDelete = (index) => {
        this.setState({
            todos: this.state.todos.filter(
                (value, ind, array) => (
                    (ind !== index)
                    ? array[ind]
                    : null
            ))
        })
    }

    render() {
        return (
        <div>
            <ol>
            {this.state.todos.map((value, index) =>
                <TodoItem
                    key={index}
                    index={index}
                    item={value}
                    handleDelete={this.handleDelete}
                    />
                )}
            </ol>
            <form onSubmit={this.handleSubmit}>
                <input type="textarea" onChange={this.handleChange} value={this.state.currtodo}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )}

}

export default Todo;