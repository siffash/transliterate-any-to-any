import { Text } from "types";

export const ltNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("data/lt-latn.rules");
  const { latnNoRules } = await import("data/latn-no.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
