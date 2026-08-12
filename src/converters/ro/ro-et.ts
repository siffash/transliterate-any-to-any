import { Text } from "types";

export const roEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("data/ro-latn.rules");
  const { latnEtRules } = await import("data/latn-et.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
