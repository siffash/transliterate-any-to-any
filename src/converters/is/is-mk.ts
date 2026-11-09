import { Text } from "types";

export const isMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(isLatnDlRules + isLatnRules + latnUeRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
