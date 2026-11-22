const UNITS = new Set("市区町村郡県都府");
const UNIT = "";

const JOINED = new RegExp(`(?<=\\p{L}) ${UNIT}(\\p{L})`, "gu");

export const markJaUnit = (segment: string, romaji: string) =>
  (UNITS.has(segment) ? UNIT : "") + romaji;

export const joinJaUnits = (text: string) =>
  text.replace(JOINED, (_, letter: string) => `-${letter.toLowerCase()}`).replaceAll(UNIT, "");
