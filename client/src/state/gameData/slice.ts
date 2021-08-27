import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "csgo-gsi-types";

type gameDataType = {
  gameData: GameState;
};

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState: {},
  reducers: {
    addData: (state, action: PayloadAction<GameState>) =>
      (state = { ...action.payload }),
  },
});

export const selectData = (state: gameDataType) => state.gameData;
export const { addData } = gameDataSlice.actions;

export default gameDataSlice.reducer;
