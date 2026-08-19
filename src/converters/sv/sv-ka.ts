import { Text } from "types";

export const svKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
