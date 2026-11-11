import { Text } from "types";

export const ruPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { ruJotRules } = await import("data/ru/ru_jot.rules");
  const { ruERules } = await import("data/ru/ru_e.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { latnPlCyrlRules } = await import("data/latn/latn-pl_cyrl.rules");
  const { latnPlLyRules } = await import("data/latn/latn-pl_ly.rules");
  const { latnPlLRules } = await import("data/latn/latn-pl_l.rules");
  const { ruLatnPlRules } = await import("data/ru/ru-latn_pl.rules");

  const transliterator = RBT.fromRules(
    ruJotRules +
      ruERules +
      ruLatnRules +
      ruLatnPlRules +
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
