const http = require("http");
const fs = require("fs");
const port = 4000;
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (url === "/") {
    fs.readFile("message.txt", "utf8", (err, data) => {
      if (err) {
        data = "No messages yet!";
      }

      res.write("<html>");
      res.write("<head><title>first-server-page</title></head>");
      res.write(
        `<body><h1>${data}</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(" <html> ");
    res.write("<head><title> first-server-page </title></head>");
    res.write(" <body><h1>welcome to node app </h1></body>");
    res.write("</html > ");
    return res.end();
  }
});
server.listen(port, () => {
  console.log(`server is running at ${port}`);
});
