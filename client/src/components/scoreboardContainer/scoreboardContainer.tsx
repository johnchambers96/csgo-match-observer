import React, { FC } from "react";
import { ScoreboardHeader } from "../scoreboardHeader";
import { selectMapData } from "../../state";
import { useSelector } from "react-redux";
import { mapNames } from "../../utils";
import "./scoreboardContainer.scss";

export const ScoreboardContainer: FC = () => {
  const mapData = useSelector(selectMapData);
  return (
    <div
      className="scoreboard-container"
      style={{ backgroundImage: `url(/image/maps/${mapNames(mapData?.name || '')}.png` }}
    >
      <ScoreboardHeader />
      {/* CT player details */}
      {/* Timeline */}
      {/* T player details */}
    </div>
  );
};

ScoreboardContainer.displayName = "scoreboardContainer";
