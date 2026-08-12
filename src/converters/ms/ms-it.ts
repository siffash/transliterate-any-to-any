import { Text } from "types";

export const msIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("data/ms-latn.rules");
  const { latnItRules } = await import("data/latn-it.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
