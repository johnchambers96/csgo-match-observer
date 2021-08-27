import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { addData, selectData } from "./state";
import { GameState } from "csgo-gsi-types";

function App() {
  const dispatch = useDispatch();
  const gameData = useSelector(selectData);
  console.log(gameData);

  useEffect(() => {
    const socket = socketIOClient("http://127.0.0.1:4000");
    socket.on("data", (data: GameState) => {
      dispatch(addData(data));
    });
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return <div className="App">CSGO Match Stats</div>;
}

export default App;
