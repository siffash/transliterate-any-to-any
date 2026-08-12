import { Text } from "types";

export const slCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnCaRules } = await import("constants/latn-ca.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
