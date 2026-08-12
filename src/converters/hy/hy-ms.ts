import { Text } from "types";

export const hyMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
