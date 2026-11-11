import { Text } from "types";

export const kkSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  const transliterator = RBT.fromRules(kkLatnRules + kkLatnORules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
