import React, {FC} from "react";
import {PlayerList} from "csgo-gsi-types";

type ScoreboardPlayerStatsProps = {
    stats?: PlayerList[];
    team: string;
};

export const ScoreboardPlayerStats: FC<ScoreboardPlayerStatsProps> = ({stats, team}) => {
    return (
        <div className="scoreboard-player-stats">
            {stats?.map((player, i) => (
                <div className="w-100" key={i}>
                    <div className={`w-100 player ${team}`}>{player.name}</div>
                </div>
            ))}
        </div>
    );
};

ScoreboardPlayerStats.displayName = "ScoreboardPlayerStats";