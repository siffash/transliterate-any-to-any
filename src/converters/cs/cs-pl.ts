import { Text } from "types";

export const csPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csLatnNjRules } = await import("data/cs/cs-latn_nj.rules");
  const { csLatnIeRules } = await import("data/cs/cs-latn_ie.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  const transliterator = RBT.fromRules(csLatnNjRules + csLatnIeRules + csLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
