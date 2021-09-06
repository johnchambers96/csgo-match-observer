import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectFirstHalf, selectSecondHalf } from "../../state";
import { RoundWinningType } from "csgo-gsi-types";
import { ScoreboardTimelineRound } from "./scoreboardTimelineRound";
import UniqueId from "lodash.uniqueid";
import "./scoreboardTimeline.scss";

const CTSideIconMap = (value: RoundWinningType): string | null => {
  switch (value) {
    case "ct_win_defuse":
      return "bomb_defused.svg";
    case "ct_win_elimination":
      return "ct_kill.svg";
    case "ct_win_time":
      return "stopwatch.svg";
    default:
      return "empty.svg";
  }
};

const TSideIconMap = (value: RoundWinningType): string | null => {
  switch (value) {
    case "t_win_bomb":
      return "bomb_exploded.svg";
    case "t_win_elimination":
      return "t_kill.svg";
    default:
      return "empty.svg";
  }
};

type ScoreboardTimelineProps = {
  shouldFlip: boolean;
};

export const ScoreboardTimeline: FC<ScoreboardTimelineProps> = ({
  shouldFlip,
}) => {
  const firstHalfRoundData = useSelector(selectFirstHalf);
  const selectSecondHalfData = useSelector(selectSecondHalf);
  return (
    <div className="scoreboard-timeline">
      <div className="scoreboard-timeline__first-half">
        {[...Array(15)].map((_, index) => (
          <div key={UniqueId()} className="scoreboard-timeline__round">
            {shouldFlip ? (
              <>
                <ScoreboardTimelineRound
                  data={firstHalfRoundData[index]}
                  getMap={TSideIconMap}
                />
                <ScoreboardTimelineRound
                  data={firstHalfRoundData[index]}
                  getMap={CTSideIconMap}
                />
              </>
            ) : (
              <>
                <ScoreboardTimelineRound
                  data={firstHalfRoundData[index]}
                  getMap={CTSideIconMap}
                />
                <ScoreboardTimelineRound
                  data={firstHalfRoundData[index]}
                  getMap={TSideIconMap}
                />
              </>
            )}
          </div>
        ))}
      </div>
      <div className="scoreboard-timeline__second-half">
        {[...Array(15)].map((_, index) => (
          <div key={UniqueId()} className="scoreboard-timeline__round">
            <ScoreboardTimelineRound
              data={selectSecondHalfData[index]}
              getMap={TSideIconMap}
            />
            <ScoreboardTimelineRound
              data={selectSecondHalfData[index]}
              getMap={CTSideIconMap}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ScoreboardTimeline.displayName = "ScoreboardTimeline";
