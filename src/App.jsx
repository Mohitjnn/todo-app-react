import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/ToDoItems";
import "./App.css";
import Message from "./components/welcomeMessage";
import { useState } from "react";
function App() {
  const initialToDoItems = [];
  const [toDoItems, setToDoItems] = useState(initialToDoItems);

  const addNewItems = (itemName, itemDueDate) => {
    setToDoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  // here we update the state using the previous state using the spread operator and returning a value using functional update

  const handleDeleteItem = (ToDoItemName) => {
    const newToDoItems = toDoItems.filter((item) => item.name !== ToDoItemName);
    setToDoItems(newToDoItems);
    console.log(`deleted item is ${ToDoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo addNewItems={addNewItems} />
      {toDoItems.length === 0 && <Message TodoItems={toDoItems} />}
      <TodoItems TodoItems={toDoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
