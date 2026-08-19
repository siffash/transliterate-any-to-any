import { Text } from "types";

export const urAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { urArRules } = await import("data/ur/ur-ar.rules");

  const transliterator = RBT.fromRules(urArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
