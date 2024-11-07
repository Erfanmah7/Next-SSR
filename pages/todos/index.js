import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

function Todos() {
  //   const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/todos")
  //       .then((res) => res.json())
  //       .then((data) => setTodos(data));
  //   }, []);

  const { data, error } = useSWR("http://localhost:3001/todos", (url) =>
    fetch(url).then((res) => res.json())
  );

  console.log(data);

  return (
    <div>
      <h1>Todos</h1>
      {data ? (
        data.map((todo) => (
          <Link href={`/todos/${todo.id}`} key={todo.id}>
            <h3>{todo.title}</h3>
          </Link>
        ))
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}

export default Todos;
