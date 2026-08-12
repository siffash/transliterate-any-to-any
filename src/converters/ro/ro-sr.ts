import { Text } from "types";

export const roSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
