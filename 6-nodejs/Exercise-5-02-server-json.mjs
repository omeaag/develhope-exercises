import { createServer } from "node:http";
import { parse } from "node:path";

const server = createServer((request, response) => {
  console.log("isteği attık");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
