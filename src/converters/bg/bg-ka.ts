import { Text } from "types";

export const bgKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
