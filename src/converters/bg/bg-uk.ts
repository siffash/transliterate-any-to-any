import { Text } from "types";

export const bgUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgUkRules } = await import("data/bg-uk.rules");

  const transliterator = RBT.fromRules(bgUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
