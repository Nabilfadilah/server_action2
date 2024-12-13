import {todoType} from "../../types/TodoTypes";
import ChangeTodo from "./ChangeTodo";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

const Todo = ({todo}: {todo: todoType}) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  //   const todoStyle = `w-full flex items-center justify-between py-3 px-20 rounded-2xl ${
  //     todo.isCompleted ? "line-through opacity-50" : ""
  //   }`;

  console.log("Ini aday error hah? : ", todo);

  return (
    <div
      className="w-full  flex items-center justify-between py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <h2 className="card-title">{todo.title}</h2>
      <div className="flex items-center gap-5">
        <ChangeTodo todo={todo} />
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
