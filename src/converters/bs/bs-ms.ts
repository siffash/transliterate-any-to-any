import { Text } from "types";

export const bsMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
