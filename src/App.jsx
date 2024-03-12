import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [];

  const [todoItem, setTodoItem] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDate) => {
    console.log(
      `New added item is: ${itemName} and its due date is: ${itemDate}`
    );

    const addNewToDoItem = [
      ...todoItem,
      { name: itemName, dueDate: itemDate },
    ];

    setTodoItem(addNewToDoItem);
  };

  const handleDeleteItem = (toDoitemName) => {
    console.log(`Deleted item is: ${toDoitemName}`);
    const updatedToDoItem = todoItem.filter(
      (item) => item.name !== toDoitemName
    );
    setTodoItem(updatedToDoItem);
  };

  return (
    <div className="app-container">
      <div className="app-box">
        <center id="todo-container">
          <AppName></AppName>
          <AddTodo itemValue={handleNewItem}></AddTodo>
          <div className="text-container">
            <TodoItems items={todoItem} onDeleteItem={handleDeleteItem}></TodoItems>
            {/* Bharat Clock */}
            {/* <BharatClockHeading></BharatClockHeading> */}
            {/* <BharatClockText/> */}
          </div>
        </center>
      </div>
    </div>
  );
}

export default App;
