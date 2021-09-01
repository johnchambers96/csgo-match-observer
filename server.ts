import { Request, Response } from "express";
import { Socket } from "socket.io";
import { GameState } from "csgo-gsi-types";

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const jsonParser = require("body-parser").json();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:4000", "http://localhost:3000"],
  },
});

let gameData: GameState | undefined;

io.on("connection", (socket: Socket) => {
  console.log("a connection has been made");
  socket.emit("data", gameData);
});

const root = require("path").join(__dirname, "client", "build");
app.use(express.static(root));
app.get("*", (req: Request, res: Response) => {
  res.sendFile("index.html", { root });
});

app.post("/observer", jsonParser, (req: Request, res: Response) => {
  gameData = req.body;
  io.emit("data", gameData);
});

server.listen(port, () => console.log(`Server is running on port: ${port}`));
