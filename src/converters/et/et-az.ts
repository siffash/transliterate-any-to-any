import { Text } from "types";

export const etAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { etLatnAzRules } = await import("data/et/et-latn_az.rules");

  const transliterator = RBT.fromRules(etLatnRules + etLatnAzRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
