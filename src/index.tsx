import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";

import App from "./App.tsx";

import { createElement } from "react";
// import "../public/output.css";

// build client side (react code) each time server starts
await Bun.build({
  entrypoints: ["./src/main.tsx"],
  outdir: "./public",
});

// create Elyisa app
const app = new Elysia()
  .use(staticPlugin())
  .get("/", async () => {
    // create our react App component
    const app = createElement(App);

    // craete stream to render/stream client side react component App
    const stream = await renderToReadableStream(app, {
      bootstrapScripts: ["./public/main.js"],
    });

    // output the stream as response
    return new Response(stream, {
      headers: {
        "content-type": "text/html",
      },
    });
  })
  .listen(3000);

// const server = Bun.serve({
//   async fetch(req): Promise<Response> {
//     const app = createElement(App);

//     // creating stream to render react component App
//     const stream = await renderToReadableStream(app, {
//       bootstrapScripts: ["./public/index.js"],
//     });
//     return new Response(stream, {
//       headers: {
//         "content-type": "text/html",
//       },
//     });
//   },
//   port: 3000,
// });

console.log(`Server started on PORT: 3000`);
