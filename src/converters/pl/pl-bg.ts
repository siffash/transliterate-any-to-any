import { Text } from "types";

export const plBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { plLatnCyrlRules } = await import("data/pl/pl-latn_cyrl.rules");
  const { plLatnIRules } = await import("data/pl/pl-latn_i.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(plLatnCyrlRules + plLatnRules + plLatnIRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
