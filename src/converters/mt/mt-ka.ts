import { Text } from "types";

export const mtKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
