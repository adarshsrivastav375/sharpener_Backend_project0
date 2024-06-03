const http = require("http");
const handler = require("./src/routes");
const port = 4000;
const server = http.createServer(handler);
server.listen(port, () => {
  console.log(` my server is running at ${port}`);
});
