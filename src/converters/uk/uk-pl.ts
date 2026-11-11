import { Text } from "types";

export const ukPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukSjRules } = await import("data/uk/uk_sj.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { latnPlCyrlRules } = await import("data/latn/latn-pl_cyrl.rules");
  const { latnPlLyRules } = await import("data/latn/latn-pl_ly.rules");
  const { latnPlLRules } = await import("data/latn/latn-pl_l.rules");

  const transliterator = RBT.fromRules(
    ukSjRules +
      ukLatnRules +
      latnPlLyRules +
      latnPlCyrlRules +
      latnPlLRules +
      latnSeparatorRules +
      latnPlRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
