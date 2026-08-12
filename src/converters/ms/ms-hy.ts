import { Text } from "types";

export const msHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("data/ms-latn.rules");
  const { latnHyRules } = await import("data/latn-hy.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
