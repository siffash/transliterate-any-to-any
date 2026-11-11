import { Text } from "types";

export const bgPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaYRules } = await import("data/bg/bg_schwa-y.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { latnPlLRules } = await import("data/latn/latn-pl_l.rules");
  const { latnPlLyRules } = await import("data/latn/latn-pl_ly.rules");

  const transliterator = RBT.fromRules(
    bgSchwaYRules + bgLatnRules + latnPlLyRules + latnPlLRules + latnPlRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
