import { Text } from "types";

export const caNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnNoRules } = await import("constants/latn-no.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
