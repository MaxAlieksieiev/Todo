import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({label, important = false}) => {
  const style = {
    color: important ? 'tomato' : 'black',
    fontWeight: important ? 'bold': 'normal',
  }
  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label" 
        style={style}
      >{ label }</span>
      <button type="button" className="btn btn-success btn-sm">
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button" className="btn btn-danger btn-sm">
        <i className="fa fa-trash-o"/>
      </button>
    </span>
    )
}

export default TodoListItem;
