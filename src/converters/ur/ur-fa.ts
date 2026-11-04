import { Text } from "types";

export const urFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { urFaRules } = await import("data/ur/ur-fa.rules");

  const transliterator = RBT.fromRules(urNormRules + urFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
