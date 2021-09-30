const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io"),
  mongoose = require("mongoose"),
  Restaurants = require("./model/restaurant");

  const connectionString = "mongodb://localhost:27017/";
  mongoose.connect(connectionString, { useNewUrlParser: true } )
  .then( () => { 
    console.log("Mongoose connected successfully ");
   },
  error => { 
    console.log("Mongoose could not connected to database  : " + error); 
  }
  );
  

const server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function(res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function(socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function(message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function() {
    console.log("Disconnected...");
  });

  socket.on("get-restaurants", () => {
    console.log("server - get-restarants called");

    Restaurants.find((error,documents) => {
      if(error){
        console.log(`Error Occurred on Resturant.Find(): ${error}`);
      }
      else{
        console.log(`Restaurants.find() returned Documents: ${documents}`);
        const data = documents.map(x => x => x.name);
        socket.emit("restaurants-data", data);
      }
    });

  });
});
