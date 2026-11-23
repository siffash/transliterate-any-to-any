import { Language, Text } from "types";
import { RBT } from "helpers/rbt";
import { copyCase } from "helpers/copyCase";
import { wordSplitter } from "helpers/wordSplitter";
import { mapText } from "helpers/convertText";

export const convertWithMap = async <T = Text>(
  text: Text,
  rules: string,
  map: Record<string, string>,
  from: Language,
  to: Language,
): Promise<T> => {
  const transliterator = RBT.fromRules(rules);

  return (await mapText(text, text =>
    wordSplitter(
      text,
      from,
      text => {
        const result = map[text.toLowerCase().replaceAll(/['’‘`´ʼ]/g, "")];
        return result ? copyCase(text, result, to) : transliterator.transliterate(text);
      },
      true,
    ),
  )) as T;
};
