import React, { FC, useMemo } from "react";
import { PlayerList, TeamType, Map } from "csgo-gsi-types";
import uniqueId from "lodash.uniqueid";
import { joinStrings } from "../../utils";
import { ScoreboardHealthBar } from "./scoreboardHealthBar";
import { ScoreboardWeaponIcon } from "./scoreboardWeaponIcon";
import "./scoreboardPlayerStats.scss";

type ScoreboardPlayerStatsProps = {
  stats?: PlayerList[];
  side: TeamType;
  teamData?: Map["team_t"] | Map["team_ct"];
};

export const ScoreboardPlayerStats: FC<ScoreboardPlayerStatsProps> = ({
  stats,
  side,
  teamData,
}) => {
  const teamName = side === "CT" ? "Counter Terrorist" : "Terrorist";

  const statsView = useMemo(() => {
    return stats?.map((player) => (
      <tr
        key={uniqueId()}
        className={joinStrings([
          "scoreboard-player-stats__player",
          player.state.health === 0 && "scoreboard-player-stats__player--dead",
        ])}
      >
        <td>
          <div className="scoreboard-player-stats__team-name">
            {player.name}
          </div>
        </td>
        <td className="scoreboard-player-stats__defuse-kit">
          {player.state.defusekit && (
            <img
              src="/image/player_stats/defusekit.png"
              alt="defuse kit icon"
            />
          )}
        </td>
        <td className="scoreboard-player-stats__weapon">
          <ScoreboardWeaponIcon weaponList={player.weapons} />
        </td>
        <td>
          <ScoreboardHealthBar value={player.state.health} />
        </td>
        <td className="scoreboard-player-stats__armor">
          {player.state.armor > 0 && (
            <img
              src={`/image/player_stats/${
                player.state.helmet ? "kevlar_helmet" : "kevlar"
              }.png`}
              alt="helmet icon"
            />
          )}
        </td>
        <td className="scoreboard-player-stats__money">
          {`$${player.state.money}`}
        </td>
        <td>{player.match_stats.kills}</td>
        <td>{player.match_stats.assists}</td>
        <td>{player.match_stats.deaths}</td>
      </tr>
    ));
  }, [stats]);

  return (
    <table
      className={`scoreboard-player-stats scoreboard-player-stats--${side}`}
    >
      <thead className="scoreboard-player-stats__header">
        <tr>
          <td colSpan={2}>
            <div className="scoreboard-player-stats__team-name">
              {teamData?.name ? teamData.name : teamName}
            </div>
          </td>
          <td title="Buy">
            <img src="/image/player_stats/buy.png" alt="buy icon" />
          </td>
          <td title="Health">
            <img src="/image/player_stats/health.png" alt="health icon" />
          </td>
          <td title="Armor" className="scoreboard-player-stats__armor">
            <img src="/image/player_stats/kevlar_helmet.png" alt="armor icon" />
          </td>
          <td title="Money" className="scoreboard-player-stats__money">
            $
          </td>
          <td title="Kills">K</td>
          <td title="Assists">A</td>
          <td title="Deaths">D</td>
        </tr>
      </thead>
      <tbody className="scoreboard-player-stats__content">{statsView}</tbody>
    </table>
  );
};

ScoreboardPlayerStats.displayName = "ScoreboardPlayerStats";
