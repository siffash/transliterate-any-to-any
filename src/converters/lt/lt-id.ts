import { Text } from "types";

export const ltId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("data/lt-latn.rules");
  const { latnIdRules } = await import("data/latn-id.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
