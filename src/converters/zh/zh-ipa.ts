import { Text } from "types";

export const zhIpa = async <T = Text>(text: Text): Promise<T> => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { mapText } = await import("helpers/convertText");
  const { toIPA } = await getPhonemizeAll();

  return (await mapText(text, text =>
    wordSplitter(text, "zh", text => filterIpa(toIPA(text, { separator: "" }), text, "zh")),
  )) as T;
};
