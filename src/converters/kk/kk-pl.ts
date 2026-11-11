import { Text } from "types";

export const kkPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { latnPlCyrlRules } = await import("data/latn/latn-pl_cyrl.rules");
  const { latnPlLyRules } = await import("data/latn/latn-pl_ly.rules");
  const { latnPlLRules } = await import("data/latn/latn-pl_l.rules");

  const transliterator = RBT.fromRules(
    kkLatnRules + kkLatnORules + latnPlLyRules + latnPlCyrlRules + latnPlLRules + latnPlRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
