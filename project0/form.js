const http = require("http");
const handler = require("./routes");
const port = 4000;
const server = http.createServer(handler);
server.listen(port, () => {
  console.log(`server is running at ${port}`);
});
