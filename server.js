const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const jsonParser = require("body-parser").json();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"],
  },
});

let gameData;

io.on("connection", (socket) => {
  console.log("a connection has been made");
  socket.emit("data", gameData);
});

const root = require("path").join(__dirname, "client", "build");
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.post("/observer", jsonParser, function (req, res) {
  gameData = req.body;
  io.emit("data", gameData);
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
