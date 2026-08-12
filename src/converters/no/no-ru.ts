import { Text } from "types";

export const noRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("data/no-latn.rules");
  const { latnRuRules } = await import("data/latn-ru.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
