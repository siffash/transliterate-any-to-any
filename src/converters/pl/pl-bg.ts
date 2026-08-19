import { Text } from "types";

export const plBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
