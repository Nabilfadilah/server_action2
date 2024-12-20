"use client";

import {deleteTodo} from "@/app/actions/route";
import Form from "@/components/Form";
import {todoType} from "../../types/TodoTypes";

const DeleteTodo = ({todo}: {todo: todoType}) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <button type="submit" className="btn btn-error">
        Delete
      </button>
    </Form>
  );
};

export default DeleteTodo;
