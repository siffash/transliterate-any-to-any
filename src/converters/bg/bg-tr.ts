import { Text } from "types";

export const bgTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgSchwaYRules } = await import("data/bg/bg_schwa-y.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(bgSchwaYRules + bgLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
