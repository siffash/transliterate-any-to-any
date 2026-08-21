import { Text } from "types";

export const svKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
