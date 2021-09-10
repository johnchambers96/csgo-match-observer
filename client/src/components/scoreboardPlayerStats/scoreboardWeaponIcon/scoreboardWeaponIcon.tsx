import React, { FC, useMemo } from "react";
import { Weapons } from "csgo-gsi-types";
import uniqueId from "lodash.uniqueid";
import "./scoreboardWeaponIcon.scss";

type ScoreboardWeaponIconProps = {
  weaponList: Weapons;
};

export const ScoreboardWeaponIcon: FC<ScoreboardWeaponIconProps> = ({
  weaponList,
}) => {
  const findWeaponIcon = useMemo(() => {
    const imgName = Object.values(weaponList)
      .sort((item) => {
        if (
          [
            "Shotgun",
            "Machine Gun",
            "Submachine Gun",
            "Rifle",
            "SniperRifle",
          ].includes(item.type)
        )
          return -1;
        if (item.type === "Pistol") return 0;
        return 1;
      })
      .find((item) =>
        [
          "Shotgun",
          "Machine Gun",
          "Submachine Gun",
          "Rifle",
          "SniperRifle",
          "Pistol",
        ].includes(item.type)
      );
    return (
      imgName && (
        <img
          key={uniqueId()}
          className="scoreboard-weapon-icon__img"
          src={`/image/weapons/${imgName.name.replace("weapon_", "")}.png`}
          alt={imgName.name}
        />
      )
    );
  }, [weaponList]);

  return <div className="scoreboard-weapon-icon">{findWeaponIcon}</div>;
};

ScoreboardWeaponIcon.displayName = "ScoreboardWeaponIcon";
