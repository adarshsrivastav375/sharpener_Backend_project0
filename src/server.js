const http = require("http");
const port = 4000;
const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/home") {
    res.write(" <html> ");
    res.write("<head><title> first-server-page </title></head>");
    res.write(" <body><h1> welcome Home</h1></body>");
    res.write("</html > ");
    res.end();
  } else if (url === "/about") {
    res.write(" <html> ");
    res.write("<head><title> first-server-page </title></head>");
    res.write(" <body><h1> welcome to About us page</h1></body>");
    res.write("</html > ");
    return res.end();
  } else if (url === "/node") {
    res.write(" <html> ");
    res.write("<head><title> first-server-page </title></head>");
    res.write(" <body><h1> welcome to my node js project</h1></body>");
    res.write("</html > ");
    return res.end();
  } else {
    res.write(" <html> ");
    res.write("<head><title> first-server-page </title></head>");
    res.write(" <body><h1> Hi Adarsh</h1></body>");
    res.write("</html > ");
    return res.end();
  }
});
server.listen(port, () => {
  console.log("server is running at ", port);
});
