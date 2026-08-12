import { Text } from "types";

export const bnNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnLatnRules } = await import("constants/bn-latn.rules");
  const { latnNoRules } = await import("constants/latn-no.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
