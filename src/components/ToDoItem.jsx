import style from "./ToDoItem.module.css";

function ToDoItem({ todoDate, todoName, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row vanilaRow">
        <div className={`col-6 ${style.vanillaText}`}>{todoName}</div>
        <div className={`col-4 ${style.vanillaText}`}>{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger vanillaButton"
            onClick={() => {
              onDeleteClick(todoName);
            }}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
