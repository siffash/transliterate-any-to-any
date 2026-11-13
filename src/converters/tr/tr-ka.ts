import { Text } from "types";

export const trKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnFrontGhRules } = await import("data/tr/tr-latn_front-gh.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(trLatnFrontGhRules + trLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
