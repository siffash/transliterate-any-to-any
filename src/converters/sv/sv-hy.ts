import { Text } from "types";

export const svHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("data/sv-latn.rules");
  const { latnHyRules } = await import("data/latn-hy.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
