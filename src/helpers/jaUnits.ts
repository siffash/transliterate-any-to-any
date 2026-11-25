const UNITS = new Set(["区", "郡", "県", "都", "府", "丁目"]);
const DROPPED_UNITS = new Set(["市", "町", "村"]);
const UNIT = "";
const DROPPED_UNIT = "";

const JOINED = new RegExp(`(?<=\\p{L}) ${UNIT}(\\p{L})`, "gu");
const DROPPED = new RegExp(`(?<=[\\p{L}\\p{M}]) ${DROPPED_UNIT}[\\p{L}\\p{M}]*`, "gu");

export const isJaUnit = (segment: string) => UNITS.has(segment) || DROPPED_UNITS.has(segment);

export const markJaUnit = (segment: string, romaji: string) =>
  (UNITS.has(segment) ? UNIT : "") + romaji;

export const markDroppedJaUnit = (segment: string, romaji: string) =>
  (DROPPED_UNITS.has(segment) ? DROPPED_UNIT : "") + romaji;

export const dropJaUnits = (text: string) => text.replace(DROPPED, "").replaceAll(DROPPED_UNIT, "");

export const joinJaUnits = (text: string) =>
  text.replace(JOINED, (_, letter: string) => `-${letter.toLowerCase()}`).replaceAll(UNIT, "");
