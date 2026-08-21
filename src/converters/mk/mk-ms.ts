import { Text } from "types";

export const mkMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
