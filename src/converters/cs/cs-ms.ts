import { Text } from "types";

export const csMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
