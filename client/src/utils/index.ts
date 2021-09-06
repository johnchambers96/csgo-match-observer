/**
 * Function that will return a shorten map name
 */
export const mapNames = (map: string): string => {
  switch (map) {
    case "workshop/1722482127/de_overpass":
      return "overpass";
    case "workshop/1722485033/de_inferno":
      return "inferno";
    case "workshop/1885085042/de_nuke":
      return "nuke";
    case "workshop/1885082371/de_dust2":
      return "dust2";
    case "workshop/1409243131/de_mirage":
      return "mirage";
    default:
      return "Add map name here";
  }
};
