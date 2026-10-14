import { Text } from "types";

export const ruUk = async <T = Text>(text: Text): Promise<T> => {
  const { RBT } = await import("helpers/rbt");
  const { ruUkRules } = await import("data/ru/ru-uk.rules");
  const { ruUkMap } = await import("data/ru/ru-uk.map");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ruUkRules);

  const convert = async (text: string) => {
    return wordSplitter(
      text,
      "ru",
      text => {
        const result = ruUkMap[text.toLowerCase().replaceAll(/['’‘`´ʼ]/g, "")];
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
