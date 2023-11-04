import { useEffect, useState } from "react";
import Counter from "./components/Counter.tsx";
import HeeaderLayout from "./components/HeaderLayout.tsx";
import UsersList from "./components/UsersList/index.tsx";
import React from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  });

  // fetching json api
  async function loadUsers() {
    setState({
      isLoading: true,
      error: null,
    });
    const data = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await data.json();
    setUsers(users);
    setState({
      isLoading: false,
      error: null,
    });
  }
  // fetching json api
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/public/output.css"></link>
        <title>My app</title>
      </head>
      <body>
        <div id="root">
          <HeeaderLayout title="Users App">
            <img src="/logo.svg" alt="Login" />
          </HeeaderLayout>
          {users && <UsersList users={users} />}
          <br />
          <hr />
          {/* <button onClick={increament}>+</button>
      <h2>{count}</h2> */}
          <Counter />
        </div>
      </body>
    </html>
  );
}
