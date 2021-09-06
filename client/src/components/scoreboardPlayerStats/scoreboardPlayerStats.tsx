import React, {FC} from "react";
import {PlayerList} from "csgo-gsi-types";

type ScoreboardPlayerStatsProps = {
    stats?: PlayerList[];
    team: string;
};

export const ScoreboardPlayerStats: FC<ScoreboardPlayerStatsProps> = ({stats, team}) => {

    console.log(stats);
    return (
        <div className="flex-column">
            <div className={`d-flex w-100 player mb-20 ${team}`}>
                <div className="pad">
                    {team === 'ct' ? 'Counter Terrorist': 'Terrorist'}
                </div>
            </div>
            <div className="scoreboard-player-stats">
                {stats?.map((player, i) => (
                    <div className="w-100" key={i}>
                        <div className={`w-100 player d-flex between ${team}`}>
                            <div className="d-flex pad player-name">
                                {player.name}
                            </div>
                            <div className="d-flex between stats">
                                {Object.values(player.match_stats).map((value, i) => (
                                    <div className="d-flex between w-100">
                                        <div className="d-flex pad w-100" key={i}>
                                            {value}
                                        </div>
                                        {i !== Object.values(player.match_stats).length - 1 ?
                                            <div className="stat-splitter">
                                            </div> : null
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ScoreboardPlayerStats.displayName = "ScoreboardPlayerStats";