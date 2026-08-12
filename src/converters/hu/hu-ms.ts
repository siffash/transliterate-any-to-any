import { Text } from "types";

export const huMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
