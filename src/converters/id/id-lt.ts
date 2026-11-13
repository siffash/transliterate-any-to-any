import { Text } from "types";

export const idLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnLtNkRules } = await import("data/latn/latn-lt_nk.rules");

  const transliterator = RBT.fromRules(msIdLatnRules + latnLtNkRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
