/**
 * Function that will return a shorten map name
 */
export const mapNames = (map: string): string => {
  switch (true) {
    case map.includes("de_overpass"):
      return "overpass";
    case map.includes("de_inferno"):
      return "inferno";
    case map.includes("de_nuke"):
      return "nuke";
    case map.includes("de_mirage"):
      return "mirage";
    case map.includes("de_dust2"):
      return "dust2";
    case map.includes("de_vertigo"):
      return "vertigo";
    default:
      return "Add map name here";
  }
};

/**
 * Function that will join an array of strings together
 */
export function joinStrings<T>(strings: T[], delimiter = " "): string {
  return strings.filter((s) => s && typeof s === "string").join(delimiter);
}
