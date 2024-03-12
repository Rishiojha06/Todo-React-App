import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({items, onDeleteItem}) => {
  return (
    <>
        {items.map((item)=>(
            <TodoItem todoName={item.name} todoDate= {item.dueDate} onDeleteItem={onDeleteItem} key={item.name}></TodoItem>
        ))}
    </>
  )
}

export default TodoItems