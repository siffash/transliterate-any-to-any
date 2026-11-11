import { Text } from "types";

export const bgSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgRRules } = await import("data/bg/bg_r.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  const transliterator = RBT.fromRules(bgRRules + bgLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
