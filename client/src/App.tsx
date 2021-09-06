import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { addData, selectMapData } from "./state";
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

  // check if we have map data, if not not we are not
  // in a game and need to promp to connect (placeholder)
  // might need to find a better way to check if game is active
  const mapData = useSelector(selectMapData);

  return mapData ? (
    <div className="scoreboard h-100">
      <ScoreboardContainer />
    </div>
  ) : (
    <div className="loading-screen">
      <span className="connect-text">Please connect to a game...</span>
      <div
        className="scoreboard-container"
        style={{
          backgroundImage: `url(/image/character/fun-t.gif`,
        }}
      ></div>
    </div>
  );
}

export default App;
