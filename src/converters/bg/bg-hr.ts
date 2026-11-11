import { Text } from "types";

export const bgHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgRRules } = await import("data/bg/bg_r.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  const transliterator = RBT.fromRules(bgRRules + bgLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
