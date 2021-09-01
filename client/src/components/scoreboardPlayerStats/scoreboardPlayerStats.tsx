import React, { FC } from "react";
import { PlayerList } from "csgo-gsi-types";

type ScoreboardPlayerStatsProps = {
  stats?: PlayerList[];
};

export const ScoreboardPlayerStats: FC<ScoreboardPlayerStatsProps> = ({
  stats,
}) => {
  return (
    <div className="scoreboard-player-stats">
      {stats?.map((player) => (
        <div key={player.name}>
          <span>{player.name}</span>
        </div>
      ))}
    </div>
  );
};

ScoreboardPlayerStats.displayName = "ScoreboardPlayerStats";