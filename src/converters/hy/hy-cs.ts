import { Text } from "types";

export const hyCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
