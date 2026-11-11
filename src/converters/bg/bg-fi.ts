import { Text } from "types";

export const bgFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaRules } = await import("data/bg/bg_schwa.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  const transliterator = RBT.fromRules(bgSchwaRules + bgLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
