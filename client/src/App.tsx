import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { useDispatch } from "react-redux";
import { addData } from "./state";
import { GameState } from "csgo-gsi-types";
import { ScoreboardContainer } from "./components";
import "./styles/index.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient("http://127.0.0.1:4000");
    socket.on("data", (data: GameState) => {
      dispatch(addData(data));
    });
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return (
    <div className="scoreboard h-100">
      <ScoreboardContainer />
    </div>
  );
}

export default App;
