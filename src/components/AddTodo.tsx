import React from "react";
import Form from "./Form";
import {create} from "@/app/actions/route";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <input
          type="text"
          name="input"
          placeholder="Add Todo..."
          className="input input-bordered input-success w-full max-w-xs"
        />
        <button className="btn btn-primary">Add New Todo</button>
      </div>
    </Form>
  );
};

export default AddTodo;
