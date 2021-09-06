/**
 * Function that will return a shorten map name
 */
export const mapNames = (map: string): string => {

  console.log(map, "reeeeeeee")
  switch (map) {
    case "de_overpass":
      return "Overpass";
    case "de_inferno":
      return "Inferno";
    case "de_nuke":
      return "Nuke";
    case "de_mirage":
      return "Mirage"
    case "de_dust2":
      return "Dust II"
    default:
      return "Add map name here";
  }
};
