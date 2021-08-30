/**
 * Function that will return a shorten map name
 */
export const mapNames = (map: string): string => {
  switch (map) {
    case "workshop/1722482127/de_overpass":
      return "overpass";
    default:
      return "Added map name";
  }
};
