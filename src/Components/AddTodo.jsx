import React, { useState } from "react";

const AddTodo = ({ itemValue }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const addTodoName = (event) => {
    setTodoName(event.target.value);
  };

  const addDate = (event) => {
    setdueDate(event.target.value);
  };

  const addTask = () => {
    itemValue(todoName, dueDate);
    setTodoName("");
    setdueDate("");
  };

  return (
    <div className="row kg-row">
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter Input"
          className="center-placeholder"
          onChange={addTodoName}
          value={todoName}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={addDate} value={dueDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-btn"
          onClick={addTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
