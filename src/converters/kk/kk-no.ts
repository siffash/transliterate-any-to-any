import { Text } from "types";

export const kkNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  const transliterator = RBT.fromRules(kkLatnRules + kkLatnORules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
