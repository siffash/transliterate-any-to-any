import { Text } from "types";

export const ukRu = async <T = Text>(text: Text): Promise<T> => {
  const { RBT } = await import("helpers/rbt");
  const { ukRuRules } = await import("data/uk/uk-ru.rules");
  const { ukRuMap } = await import("data/uk/uk-ru.map");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ukRuRules);

  const convert = async (text: string) => {
    return wordSplitter(
      text,
      "uk",
      text => {
        const result = ukRuMap[text.toLowerCase().replaceAll(/['’‘`´ʼ]/g, "")];
        if (result) {
          return copyCase(text, result, "ru");
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
