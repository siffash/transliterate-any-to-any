import { Text } from "types";

export const svLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { noSvLatnLtRules } = await import("data/latn/no_sv-latn_lt.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { svLatnBalticPreRules } = await import("data/sv/sv-latn_baltic-pre.rules");
  const { svLatnBalticRules } = await import("data/sv/sv-latn_baltic.rules");

  const transliterator = RBT.fromRules(
    noSvLatnLtRules + svLatnBalticPreRules + svLatnRules + svLatnBalticRules + latnLtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
