import { Text } from "types";

export const mtKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
