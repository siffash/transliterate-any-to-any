import { Text } from "types";

export const jaLatn = async <T = Text>(text: Text, { units = true } = {}): Promise<T> => {
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { getKuroshiro } = await import("helpers/getKuroshiro");
  const { markJaUnit } = await import("helpers/jaUnits");
  const { mapText } = await import("helpers/convertText");

  const kuroshiro = await getKuroshiro();

  return (await mapText(text, text =>
    wordSplitter(normalizeJa(text), "ja", async (text, _, tokens) => {
      const romaji = await kuroshiro.convert(text, { to: "romaji" }, tokens);
      return units ? markJaUnit(text, romaji) : romaji;
    }),
  )) as T;
};
