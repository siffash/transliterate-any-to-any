import { Text } from "types";

export const bgCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaRules } = await import("data/bg/bg_schwa.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  const transliterator = RBT.fromRules(bgSchwaRules + bgLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
