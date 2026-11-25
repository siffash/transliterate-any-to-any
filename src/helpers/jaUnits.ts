const UNITS = new Set(["市", "区", "町", "村", "郡", "県", "都", "府", "丁目"]);
const UNIT = "";

const JOINED = new RegExp(`(?<=\\p{L}) ${UNIT}(\\p{L})`, "gu");

export const isJaUnit = (segment: string) => UNITS.has(segment);

export const markJaUnit = (segment: string, romaji: string) =>
  (isJaUnit(segment) ? UNIT : "") + romaji;

export const joinJaUnits = (text: string) =>
  text.replace(JOINED, (_, letter: string) => `-${letter.toLowerCase()}`).replaceAll(UNIT, "");
