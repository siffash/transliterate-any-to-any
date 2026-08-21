import { Text } from "types";

export const mkEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
