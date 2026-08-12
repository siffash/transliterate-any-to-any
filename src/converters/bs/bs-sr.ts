import { Text } from "types";

export const bsSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
