import React, { FC } from "react";
import { RoundWinningType } from "csgo-gsi-types";

type ScoreboardTimelineRoundProps = {
  data: RoundWinningType;
  getMap: (value: RoundWinningType) => string | null;
};

export const ScoreboardTimelineRound: FC<ScoreboardTimelineRoundProps> = ({
  data,
  getMap,
}) => {
  return (
    <div className="scoreboard-timeline__side">
      <img src={`/image/timeline/${getMap(data)}` || ""} alt="Round history" />
    </div>
  );
};

ScoreboardTimelineRound.displayName = "ScoreboardTimelineRound";
