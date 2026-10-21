import { Text } from "types";

export const azEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");
  const { latnEnKhRules } = await import("data/latn/latn-en_kh.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnEnKhRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
