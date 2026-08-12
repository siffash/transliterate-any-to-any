import { Text } from "types";

export const esMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
