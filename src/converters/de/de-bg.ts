import { Text } from "types";

export const deBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { deLatnBgRules } = await import("data/de/de-latn_bg.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(deLatnRules + deLatnBgRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
