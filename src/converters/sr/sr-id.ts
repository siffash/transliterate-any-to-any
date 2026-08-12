import { Text } from "types";

export const srId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnIdRules } = await import("constants/latn-id.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
