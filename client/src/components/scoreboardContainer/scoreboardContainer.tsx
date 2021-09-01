import React, { FC, useCallback } from "react";
import { ScoreboardHeader } from "../scoreboardHeader";
import { selectMapData, selectAllPlayers } from "../../state";
import { useSelector } from "react-redux";
import { mapNames } from "../../utils";
import { TeamType } from "csgo-gsi-types";
import "./scoreboardContainer.scss";
import { ScoreboardPlayerStats } from "../scoreboardPlayerStats";

export const ScoreboardContainer: FC = () => {
  const mapData = useSelector(selectMapData);
  const playerData = useSelector(selectAllPlayers);

  const sortPlayerData = useCallback(
    (side: TeamType) => {
      if (!playerData) return undefined;
      return Object.values(playerData).filter((item) => item.team === side);
    },
    [playerData]
  );

  return (
    <div
      className="scoreboard-container"
      style={{
        backgroundImage: `url(/image/maps/${mapNames(mapData?.name || "")}.png`,
      }}
    >
      <ScoreboardHeader />
      <ScoreboardPlayerStats stats={sortPlayerData("CT")} />
      {/* Timeline */}
      <ScoreboardPlayerStats stats={sortPlayerData("T")} />
    </div>
  );
};

ScoreboardContainer.displayName = "scoreboardContainer";