import React, { FC } from "react";
import { joinStrings } from "../../../utils";
import "./scoreboardHealthBar.scss";

type ScoreboardHealthBarProps = {
  value: number;
};

export const ScoreboardHealthBar: FC<ScoreboardHealthBarProps> = ({
  value,
}) => {
  return (
    <div className="scoreboard-health-bar">
      <span className="scoreboard-health-bar__value">{value}</span>
      <div
        className={joinStrings([
          "scoreboard-health-bar__hp-remaining",
          value >= 66 && "scoreboard-health-bar__hp-remaining--high",
          value >= 33 &&
            66 > value &&
            "scoreboard-health-bar__hp-remaining--medium",
          33 > value && "scoreboard-health-bar__hp-remaining--low",
        ])}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

ScoreboardHealthBar.displayName = "ScoreboardHealthBar";
