import { Text } from "types";

export const noSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
