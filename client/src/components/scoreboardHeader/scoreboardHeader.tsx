import React, { FC } from "react";
import { useSelector } from "react-redux";
import { mapNames } from "../../utils";
import { selectMapData, selectPhaseCountdowns } from "../../state";
import "./scoreboardHeader.scss";
import { useTimer } from "../../hooks";

export const ScoreboardHeader: FC = () => {
  const { time, formatTimer } = useTimer();
  const mapData = useSelector(selectMapData);
  const phaseData = useSelector(selectPhaseCountdowns);
  
  if (!mapData) return null;

  return (
    <div className="scoreboard-header mb-20">
      <div className="scoreboard-header__round">
        <span className="scoreboard-header__text">
          R: <span>{`${mapData.round + 1} - ${mapNames(mapData.name)}`}</span>
        </span>
      </div>
      <div className="scoreboard-header__score">
        <span className="scoreboard-header__score--ct">
          {mapData.team_ct.score || 0}
        </span>
        <span>:</span>
        <span className="scoreboard-header__score--t">
          {mapData.team_t.score || 0}
        </span>
      </div>
      <div className="scoreboard-header__time">
        <span className="scoreboard-header__text">
          {formatTimer(time)}
          <img
            src={
              phaseData?.phase === "bomb"
                ? "/image/bomb_exploded.webp"
                : "/image/bomb.webp"
            }
            alt="bomb"
          />
        </span>
      </div>
    </div>
  );
};

ScoreboardHeader.displayName = "scoreboardHeader";
