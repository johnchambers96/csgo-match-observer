import { configureStore } from "@reduxjs/toolkit";
import gameDataReducer from "./gameData/slice";

export const Store = configureStore({
  reducer: {
    gameData: gameDataReducer,
  },
});
