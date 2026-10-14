import { Text } from "types";

export const mkUk = async <T = Text>(text: Text): Promise<T> => {
  const { RBT } = await import("helpers/rbt");
  const { mkUkRules } = await import("data/mk/mk-uk.rules");
  const { mkUkMap } = await import("data/mk/mk-uk.map");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(mkUkRules);

  const convert = async (text: string) => {
    return wordSplitter(
      text,
      "mk",
      text => {
        const result = mkUkMap[text.toLowerCase().replaceAll(/['’‘`´ʼ]/g, "")];
        if (result) {
          return copyCase(text, result, "uk");
        }
        return transliterator.transliterate(text);
      },
      true,
    );
  };

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
