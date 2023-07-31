import React from 'react';
import {TodoItem} from '../myComponents/TodoItem';

export const Todos = (props) => {
  const fStyle = {
    minHeight: "70vh"
  }
  return (
    <div className='container' style={fStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todo.length === 0 ? "There is nothing to display":
      props.todo.map((todo) =>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}
