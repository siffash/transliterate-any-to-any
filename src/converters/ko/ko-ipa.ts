import { Text } from "types";
import type { KoSeparator } from "helpers/normalizeKo";

export const koIpa = async <T = Text>(
  text: Text,
  separators: KoSeparator,
  rules?: string,
): Promise<T> => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { normalizeKoIpa } = await import("helpers/normalizeKoIpa");
  const { RBT } = await import("helpers/rbt");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { mapText } = await import("helpers/convertText");

  const { toIPA } = await getPhonemizeAll();
  const transliterator = rules === undefined ? undefined : RBT.fromRules(rules);

  return (await mapText(text, text =>
    wordSplitter(text, "ko", text =>
      normalizeKo(
        text,
        text => {
          const ipa = filterIpa(normalizeKoIpa(toIPA(text, { anyAscii: true })), text, "ko");
          return transliterator ? transliterator.transliterate(ipa) : ipa;
        },
        "ipa",
        separators,
      ),
    ),
  )) as T;
};
