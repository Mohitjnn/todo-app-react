import ToDoItem from "./ToDoItem";
import ItemsStyle from "./ToDoItems.module.css";
const TodoItems = ({ TodoItems, onDeleteClick }) => {
  return (
    <div className={ItemsStyle.itemContainer}>
      {TodoItems.map((item) => (
        <ToDoItem
          todoDate={item.dueDate}
          todoName={item.name}
          key={item.name}
          onDeleteClick={onDeleteClick}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default TodoItems;
