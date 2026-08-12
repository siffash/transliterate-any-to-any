import { Text } from "types";

export const roBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("data/ro-latn.rules");
  const { latnBgRules } = await import("data/latn-bg.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
