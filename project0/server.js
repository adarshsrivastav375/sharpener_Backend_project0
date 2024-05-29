const http = require("http");
const port = 4000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write(" <html> ");
  res.write("<head><title> first-server-page </title></head>");
  res.write(" <body><h1> Hi Adarsh Srivastav</h1></body>");
  res.write("</html > ");
  res.end();
});
server.listen(port, () => {
  console.log("server is running at ", port);
});
