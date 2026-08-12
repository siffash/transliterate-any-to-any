import { Text } from "types";

export const urUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { urUrRules } = await import("constants/ur-ur.rules");

  const transliterator = RBT.fromRules(urUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
