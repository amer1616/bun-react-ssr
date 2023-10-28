import { renderToReadableStream } from "react-dom/server";
import App from "./App.tsx";
import "./public/tailwind.css";

const server = Bun.serve({
  async fetch(req): Promise<Response> {
    // fetching json api
    const data = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await data.json();

    // creating stream to render react component App
    const stream = await renderToReadableStream(
      <App message="hello Bun-React!!" users={users} />
    );
    return new Response(stream, {
      headers: {
        "content-type": "text/html",
      },
    });
  },
  port: 3000,
});

console.log(`Server started on PORT:${server.port}`);
