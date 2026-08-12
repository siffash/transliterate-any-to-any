import { Text } from "types";

export const bsId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnIdRules } = await import("constants/latn-id.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
