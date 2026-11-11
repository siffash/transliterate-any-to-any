import { Text } from "types";

export const deNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnNoRules + latnZSRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
