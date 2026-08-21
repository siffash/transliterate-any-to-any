import { Text } from "types";

export const svNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
