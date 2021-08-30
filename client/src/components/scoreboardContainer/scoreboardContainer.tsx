import React, { FC } from "react";
import { ScoreboardHeader } from "../scoreboardHeader";
import "./scoreboardContainer.scss";

export const ScoreboardContainer: FC = () => {
  return (
    <div className="scoreboard-container">
      <ScoreboardHeader />
      {/* CT player details */}
      {/* Timeline */}
      {/* T player details */}
    </div>
  );
};

ScoreboardContainer.displayName = "scoreboardContainer";
