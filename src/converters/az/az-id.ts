import { Text } from "types";

export const azId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("constants/az-latn.rules");
  const { latnIdRules } = await import("constants/latn-id.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
