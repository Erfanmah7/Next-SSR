import React, { useState } from "react";

function TodoDetaile({ todos }) {
  const [todo, setTodo] = useState(todos);

  const updateHandler = async (id) => {
    const res = await fetch(`http://localhost:3001/todos/${id}`);
    const data = await res.json();
    setTodo(data);
  };

  return (
    <div>
      <h1>TodoDetaile</h1>
      <h2>{todo.title}</h2>
      <h3>{`${todo.completed}`}</h3>
      <button onClick={() => updateHandler(todo.id)}>update</button>
    </div>
  );
}

export default TodoDetaile;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:3001/todos/${params.todoId}`);
  const data = await res.json();

  return {
    props: { todos: data },
  };
}
