import { Text } from "types/languages";

export const jaIpa = async <T = Text>(text: Text): Promise<T> => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { phonemize } = await import("phonemize/all");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());

  const convert = async (text: string) => {
    const hiragana = await kuroshiro.convert(text, { to: "hiragana" });
    return phonemize(hiragana, { anyAscii: true });
  };

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(async text => await convert(text)))) as T;
  }
};
