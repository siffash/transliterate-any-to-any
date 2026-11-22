import { Text } from "types";

export const isFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { isLatnFrRules } = await import("data/is/is-latn_fr.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnGhGRules + isLatnFrRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
