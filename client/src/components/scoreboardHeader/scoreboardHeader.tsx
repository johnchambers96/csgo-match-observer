import React, { FC } from "react";
import { useSelector } from "react-redux";
import { mapNames } from "../../utils";
import { selectMapData, selectPhaseCountdowns } from "../../state";
import "./scoreboardHeader.scss";

export const ScoreboardHeader: FC = () => {
  const mapData = useSelector(selectMapData);
  const phaseData = useSelector(selectPhaseCountdowns);
  console.log(phaseData);

  if (!mapData) return null;

  return (
    <div className="scoreboard-header">
      <div className="scoreboard-header__round">
        <span className="scoreboard-header__text">
          R: <span>{`${mapData.round} - ${mapNames(mapData.name)}`}</span>
        </span>
      </div>
      <div className="scoreboard-header__score">
        <span className="scoreboard-header__score--ct">
          {mapData.team_ct.score}
        </span>
        <span>:</span>
        <span className="scoreboard-header__score--t">
          {mapData.team_t.score}
        </span>
      </div>
      <div className="scoreboard-header__time">
        <span className="scoreboard-header__text">
          1:55 <span>icon</span>
        </span>
      </div>
    </div>
  );
};

ScoreboardHeader.displayName = "scoreboardHeader";
