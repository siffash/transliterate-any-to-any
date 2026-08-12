import { Text } from "types";

export const msKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("data/ms-latn.rules");
  const { latnKaRules } = await import("data/latn-ka.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
