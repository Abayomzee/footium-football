import { team1 } from "../data";

export const setFirstElevenPlayers = (): object[] => {
  const map = new Map();
  [...Array(35)].forEach((d, index) => map.set(index, null));

  team1.firstEleven.map((player, i) => {
    if (player.playerPosition.position === "GK") {
      return map.set(32, player);
    }

    if (player.name.firstName === "Neymar") {
      return map.set(1, player);
    }
    if (player.name.firstName === "Zlatan") {
      return map.set(2, player);
    }
    if (player.name.firstName === "Messi") {
      return map.set(3, player);
    }
    if (player.name.firstName === "Sumo") {
      return map.set(11, player);
    }
    if (player.name.firstName === "Son") {
      return map.set(12, player);
    }
    if (player.name.firstName === "Naruto") {
      return map.set(13, player);
    }
    if (player.name.firstName === "Hatake") {
      return map.set(20, player);
    }
    if (player.name.firstName === "Mina") {
      return map.set(21, player);
    }
    if (player.name.firstName === "Monk") {
      return map.set(23, player);
    }
    if (player.name.firstName === "Rona") {
      return map.set(24, player);
    }

    return map.set(i, player);
  });

  const firstEleven = Array.from(map, ([, value]) =>
    value ? { ...value } : null
  );

  return firstEleven;
};


export const checkFirstTeamLength = (firstTeam: any) => {
  const playersLength = firstTeam.filter(Boolean);
  return playersLength;
};
