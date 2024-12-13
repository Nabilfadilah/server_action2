"use client";

import {todoStatus} from "@/app/actions/route";
import Form from "@/components/Form";
import {todoType} from "../../types/TodoTypes";
import {useState} from "react";

const ChangeTodo = ({todo}: {todo: todoType}) => {
  const [isClicked, setIsClicked] = useState(false); // Tambahkan state

  const handleSubmit = () => {
    setIsClicked(true); // Set state menjadi true setelah tombol diklik
  };

  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />
      <button
        type="submit"
        className="btn btn-info"
        onClick={handleSubmit}
        disabled={isClicked}
      >
        Done
      </button>
    </Form>
  );
};

export default ChangeTodo;
