import { Text } from "types";

export const slEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
