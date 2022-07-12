const http = require("http"),
      fs = require("fs");

// read file function
const readIt = (path) =>
  new Promise((resolve, rejects) => {
    fs.readFile(path, (err, data) => {
      if (err) rejects(err);
      else resolve(data);
    });
  });

const server = http.createServer((req, res) => {
  // check type of request
  const type = req.url.split("/")[1];

  // request of html/page
  if (type !== "public") {
    if (req.url !== "/favicon.ico") {
      let path = "";
      // connect home page and index.html
      if (req.url === "/" || req.url === '/home') path = __dirname + "/views/index.html";
      else path = __dirname + "/views" + req.url + ".html";

      readIt(path)
        .then((html) => {
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.end(html);
        })
        .catch((err) => {
          // log the error info in server side console
          console.log(err);

          // load the notfound page
          readIt(__dirname + "/views/notfound.html")
            .then((notFind) => {
              res.writeHead(200, {
                "Content-Type": "text/html",
              });
              res.end(notFind);
            })
            .catch((notFindErr) => console.log("notFindErr", notFindErr));
        });
      // ignore the request of favicon.ico
    } else {
      res.end();
    }
  }

  // request of files
  else {
    const fileType = req.url
      .split("/")
      [req.url.split("/").length - 1].split(".")[1];
    // console.log(fileType)
    readIt("." + req.url)
      .then((data) => {
        res.writeHead(200, {
          "Content-Type":
            fileType !== "png" ? `text/${fileType}` : `image/${fileType}`,
        });
        res.end(data);
      })
      .catch((err) => res.end(err.toString()));
  }
});

server.listen(3000, () => console.log("Server is on Port 3000"));