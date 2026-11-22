import { Text } from "types";

export const bgPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaYRules } = await import("data/bg/bg_schwa-y.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { latnPlLRules } = await import("data/latn/latn-pl_l.rules");
  const { latnPlLyRules } = await import("data/latn/latn-pl_ly.rules");
  const { bgLatnIjaRules } = await import("data/bg/bg-latn_ija.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  const transliterator = RBT.fromRules(
    bgSchwaYRules +
      bgLatnIjaRules +
      bgLatnRules +
      latnPlLyRules +
      latnPlLRules +
      latnPlRules +
      latnJRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
