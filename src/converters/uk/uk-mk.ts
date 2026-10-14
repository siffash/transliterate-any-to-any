import { Text } from "types";

export const ukMk = async <T = Text>(text: Text): Promise<T> => {
  const { RBT } = await import("helpers/rbt");
  const { ukMkRules } = await import("data/uk/uk-mk.rules");
  const { ukMkMap } = await import("data/uk/uk-mk.map");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ukMkRules);

  const convert = async (text: string) => {
    return wordSplitter(
      text,
      "uk",
      text => {
        const result = ukMkMap[text.toLowerCase().replaceAll(/['’‘`´ʼ]/g, "")];
        if (result) {
          return copyCase(text, result, "mk");
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
