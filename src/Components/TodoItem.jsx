import React from 'react'

const TodoItem = ({todoName, todoDate, onDeleteItem}) => {
  return (
    <div>
        <div className="row kg-row">
        <div className="col-4">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger kg-btn" onClick={()=>onDeleteItem(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem