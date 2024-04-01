import { useState, useRef } from "react";
import AddToDoCss from "./AddToDo.module.css";
import { RiAddCircleFill } from "react-icons/ri";
function AddToDo({ addNewItems }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleNewItems = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    addNewItems(todoName, todoDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row vanilaRow" onSubmit={handleNewItems}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter to-do here"
            className={AddToDoCss.input}
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            className={AddToDoCss.input}
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success vanillaButton">
            <RiAddCircleFill />
            {/* using react icon library npm install method is already mentioned on its website just search react icon library */}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;

// useRef helps change the ui with re rendering, can hold previous states or prop values, refs can be passed as props,
