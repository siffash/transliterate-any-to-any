import { Text } from "types";

export const hyCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");
  const { latnHardRules } = await import("data/latn/latn_hard.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnHardRules + latnGGhRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
