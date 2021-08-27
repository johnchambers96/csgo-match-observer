import React from "react";
import socketIOClient from "socket.io-client";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const socket = socketIOClient("http://127.0.0.1:4000");
    socket.on("data", (data) => {
      console.log(data);
    });
  }, []);
  return <div className="App">CSGO Match Stats</div>;
}

export default App;
